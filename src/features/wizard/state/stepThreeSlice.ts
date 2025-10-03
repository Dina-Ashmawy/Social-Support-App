// src/store/form/stepThreeSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WizardValues } from "../model/types";

export type StepThreeState = Pick<
  WizardValues,
  "situationCurrent" | "employmentCircumstances" | "reasonApplying"
>;

export const initialStepThreeState: StepThreeState = {
  situationCurrent: "",
  employmentCircumstances: "",
  reasonApplying: "",
};

const stepThreeSlice = createSlice({
  name: "stepThree",
  initialState: initialStepThreeState,
  reducers: {
    setStepThree(state, action: PayloadAction<StepThreeState>) {
      return { ...state, ...action.payload };
    },
    resetStepThree() {
      return initialStepThreeState;
    },
  },
});

export const { setStepThree, resetStepThree } = stepThreeSlice.actions;
export default stepThreeSlice.reducer;
