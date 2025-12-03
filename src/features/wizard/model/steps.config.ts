import type { FieldPath } from "react-hook-form";
import type { WizardValues } from "./types";

export const order = [
  "/step1",
  "/step2",
  "/step3",
  "/success",
  "/error",
] as const;
export type StepPath = (typeof order)[number];

export const fieldsPerStep: Record<
  StepPath,
  readonly FieldPath<WizardValues>[]
> = {
  "/step1": [
    "name",
    "nationalId",
    "dob",
    "gender",
    "address",
    "city",
    "state",
    "country",
    "phone",
    "email",
  ],
  "/step2": [
    "maritalStatus",
    "dependentsCount",
    "employmentStatus",
    "monthlyIncome",
    "housingStatus",
  ],
  "/step3": ["situationCurrent", "employmentCircumstances", "reasonApplying"],
  "/success": [],
  "/error": [],
} as const;
