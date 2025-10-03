import { type AppDispatch } from "../../store";
import { setStepOne } from "../wizard/state/stepOneSlice";
import { setStepThree } from "../wizard/state/stepThreeSlice";
import { setStepTwo } from "../wizard/state/stepTwoSlice";
import { getDraft } from "./services/storage";

export const loadDraftIntoStore = (
  id: string,
  dispatch: AppDispatch
): number => {
  const draft = getDraft(id);
  if (!draft) return 0;
  dispatch(setStepOne(draft.data.stepOne));
  dispatch(setStepTwo(draft.data.stepTwo));
  dispatch(setStepThree(draft.data.stepThree));
  return draft.stepIndex;
};
