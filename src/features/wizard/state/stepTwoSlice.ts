import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WizardValues } from "../model/types";

export type StepTwoState = Pick<
  WizardValues,
  | "maritalStatus"
  | "dependentsCount"
  | "employmentStatus"
  | "monthlyIncome"
  | "housingStatus"
>;

export const initialStepTwoState: StepTwoState = {
  maritalStatus: "",
  dependentsCount: undefined,
  employmentStatus: "",
  monthlyIncome: undefined,
  housingStatus: "",
};

const stepTwoSlice = createSlice({
  name: "stepTwo",
  initialState: initialStepTwoState,
  reducers: {
    setStepTwo(state, action: PayloadAction<StepTwoState>) {
      return { ...state, ...action.payload };
    },
    resetStepTwo() {
      return initialStepTwoState;
    },
  },
});

export const { setStepTwo, resetStepTwo } = stepTwoSlice.actions;
export default stepTwoSlice.reducer;
