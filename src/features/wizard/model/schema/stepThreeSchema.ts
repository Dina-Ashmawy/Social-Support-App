import * as yup from "yup";
import { safeTranslate } from "../../../../lib/i18n";

export const stepThreeSchema = yup.object({
  situationCurrent: yup
    .string()
    .min(20, safeTranslate("error_message_minChars20"))
    .required(safeTranslate("error_message_situationCurrent")),
  employmentCircumstances: yup
    .string()
    .min(20, safeTranslate("error_message_minChars20"))
    .required(safeTranslate("error_message_employmentCircumstances")),
  reasonApplying: yup
    .string()
    .min(20, safeTranslate("error_message_minChars20"))
    .required(safeTranslate("error_message_reasonApplying")),
});
