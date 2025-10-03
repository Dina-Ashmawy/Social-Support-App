import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WizardValues } from "../model/types";

export type StepOneState = Pick<
  WizardValues,
  | "name"
  | "nationalId"
  | "dob"
  | "gender"
  | "address"
  | "city"
  | "state"
  | "country"
  | "phone"
  | "email"
>;

export const initialStepOneState: StepOneState = {
  name: "",
  nationalId: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  email: "",
};

const stepOneSlice = createSlice({
  name: "stepOne",
  initialState: initialStepOneState,
  reducers: {
    setStepOne(state, action: PayloadAction<Partial<StepOneState>>) {
      return { ...state, ...action.payload };
    },
    resetStepOne() {
      return initialStepOneState;
    },
  },
});

export const { setStepOne, resetStepOne } = stepOneSlice.actions;
export default stepOneSlice.reducer;
