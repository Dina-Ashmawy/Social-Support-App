import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stepOne from "../features/wizard/state/stepOneSlice";
import stepTwo from "../features/wizard/state/stepTwoSlice";
import stepThree from "../features/wizard/state/stepThreeSlice";

const reducer = combineReducers({ stepOne, stepTwo, stepThree });

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
