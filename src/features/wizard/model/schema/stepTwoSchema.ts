import * as yup from "yup";
import { safeTranslate } from "../../../../lib/i18n";
import {
  EMPLOYMENT_OPTIONS,
  HOUSING_OPTIONS,
  MARITAL_OPTIONS,
} from "../../../../shared/constants/selectOptions";

export const stepTwoSchema = yup.object({
  maritalStatus: yup
    .string()
    .oneOf(MARITAL_OPTIONS, safeTranslate("error_message_maritalStatus"))
    .required(safeTranslate("error_message_required")),

  dependentsCount: yup
    .number()
    .typeError(safeTranslate("error_message_number"))
    .min(0, safeTranslate("error_message_minZero"))
    .integer(safeTranslate("error_message_integer"))
    .required(safeTranslate("error_message_required")),

  employmentStatus: yup
    .string()
    .oneOf(EMPLOYMENT_OPTIONS, safeTranslate("error_message_employmentStatus"))
    .required(safeTranslate("error_message_required")),

  monthlyIncome: yup
    .number()
    .typeError(safeTranslate("error_message_number"))
    .min(0, safeTranslate("error_message_minZero"))
    .required(safeTranslate("error_message_required")),

  housingStatus: yup
    .string()
    .oneOf(HOUSING_OPTIONS, safeTranslate("error_message_housingStatus"))
    .required(safeTranslate("error_message_required")),
});
