// src/features/wizard/useWizard.ts
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import type { WizardValues } from "./model/types";
import type { RootState, AppDispatch } from "../../store";

import { combinedSchema, fieldsPerStep, LAST_STEP } from "./model/validation";
import { pickStepOne, pickStepTwo, pickStepThree } from "./model/pickers";

import {
  initialStepOneState,
  setStepOne,
  resetStepOne,
} from "./state/stepOneSlice";
import {
  initialStepTwoState,
  setStepTwo,
  resetStepTwo,
} from "./state/stepTwoSlice";
import {
  initialStepThreeState,
  setStepThree,
  resetStepThree,
} from "./state/stepThreeSlice";

import { loadDraftIntoStore } from "../drafts/loadIntoStore";
import { store } from "../../store";
import { submitApplication } from "../../api/submitApplication";
import {
  createDraft,
  updateDraft,
  deleteDraft,
} from "../drafts/services/storage";

export function useWizard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // Redux slices (descriptive names)
  const stepOneStateFromRedux = useSelector(
    (state: RootState) => state.stepOne
  );
  const stepTwoStateFromRedux = useSelector(
    (state: RootState) => state.stepTwo
  );
  const stepThreeStateFromRedux = useSelector(
    (state: RootState) => state.stepThree
  );

  // Local state
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);

  // React Hook Form
  const methods = useForm<WizardValues>({
    resolver: yupResolver(combinedSchema),
    mode: "onSubmit",
    shouldUnregister: false,
    defaultValues: {
      ...stepOneStateFromRedux,
      ...stepTwoStateFromRedux,
      ...stepThreeStateFromRedux,
    },
  });

  useEffect(() => {
    const draftIdFromUrl = searchParams.get("draftId");
    const isNewFromUrl = searchParams.get("new");

    if (draftIdFromUrl) {
      const restoredStepIndex = loadDraftIntoStore(draftIdFromUrl, dispatch);
      setCurrentDraftId(draftIdFromUrl);
      setActiveStepIndex(restoredStepIndex);

      const snapshot = store.getState() as RootState;
      methods.reset({
        ...snapshot.stepOne,
        ...snapshot.stepTwo,
        ...snapshot.stepThree,
      });
      return;
    }

    if (isNewFromUrl) {
      setCurrentDraftId(null);
      setActiveStepIndex(0);

      dispatch(resetStepOne());
      dispatch(resetStepTwo());
      dispatch(resetStepThree());

      methods.reset({
        ...initialStepOneState,
        ...initialStepTwoState,
        ...initialStepThreeState,
      });
    }
  }, [searchParams, dispatch, methods]);

  const goNext = async () => {
    const fieldsForCurrentStep = fieldsPerStep[activeStepIndex];
    const isValid = await methods.trigger(fieldsForCurrentStep);
    if (!isValid) return;

    const formValues = methods.getValues();

    if (activeStepIndex === 0) dispatch(setStepOne(pickStepOne(formValues)));
    if (activeStepIndex === 1) dispatch(setStepTwo(pickStepTwo(formValues)));
    if (activeStepIndex === 2)
      dispatch(setStepThree(pickStepThree(formValues)));

    setActiveStepIndex((prev) => Math.min(prev + 1, LAST_STEP));
  };

  const goBack = () => {
    setActiveStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const onSaveDraft = () => {
    // 1) Sync latest form values into Redux slices
    const formValues = methods.getValues();
    dispatch(setStepOne(pickStepOne(formValues)));
    dispatch(setStepTwo(pickStepTwo(formValues)));
    dispatch(setStepThree(pickStepThree(formValues)));

    // 2) Take a fresh snapshot of the store
    const snapshot: RootState = store.getState();

    // 3) Persist to localStorage (update if exists, otherwise create)
    if (currentDraftId) {
      const updated = updateDraft(currentDraftId, snapshot, activeStepIndex);
      if (!updated) {
        const newId = createDraft(snapshot, activeStepIndex);
        setCurrentDraftId(newId);
      }
    } else {
      const newId = createDraft(snapshot, activeStepIndex);
      setCurrentDraftId(newId);
    }

    message.success(t("draftSaved"));
    navigate("/");
  };

  const onFinalSubmit = async () => {
    const isValid = await methods.trigger(fieldsPerStep[LAST_STEP]);
    if (!isValid) return;

    try {
      const response = await submitApplication(methods.getValues());

      if (currentDraftId) {
        deleteDraft(currentDraftId);
        setCurrentDraftId(null);
      }

      message.success(t("submitted"));
      navigate(`/success?appId=${response.id}`);
    } catch {
      navigate("/error");
    }
  };

  return {
    FormProvider,
    methods, // RHF methods
    step: activeStepIndex, // current step index
    goNext,
    goBack,
    onSaveDraft,
    onFinalSubmit,
  };
}
