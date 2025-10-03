import * as yup from "yup";

import type { FieldPath } from "react-hook-form";
import type { WizardValues } from "./types";
import { stepOneSchema } from "./schema/stepOneSchema";
import { stepTwoSchema } from "./schema/stepTwoSchema";
import { stepThreeSchema } from "./schema/stepThreeSchema";

export const combinedSchema: yup.AnyObjectSchema = stepOneSchema
  .concat(stepTwoSchema)
  .concat(stepThreeSchema);

export const fieldsPerStep: ReadonlyArray<
  ReadonlyArray<FieldPath<WizardValues>>
> = [
  [
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
  [
    "maritalStatus",
    "dependentsCount",
    "employmentStatus",
    "monthlyIncome",
    "housingStatus",
  ],
  ["situationCurrent", "employmentCircumstances", "reasonApplying"],
];

export const LAST_STEP = 2 as const;
