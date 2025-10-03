import type { RootState } from "../../store";

export type DraftEntry = {
  id: string;
  updatedAt: number;
  stepIndex: number;
  data: RootState;
};
