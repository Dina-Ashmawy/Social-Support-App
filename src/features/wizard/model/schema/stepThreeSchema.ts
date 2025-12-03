import * as yup from "yup";
import { safeTranslate } from "../../../../lib/i18n";

const asString = (v: string | number | null | undefined) => String(v ?? "");

export const stepThreeSchema = yup.object({
  situationCurrent: yup
    .string()
    .transform(asString)
    .min(20, safeTranslate("error_message_minChars20"))
    .required(safeTranslate("error_message_situationCurrent")),
  employmentCircumstances: yup
    .string()
    .transform(asString)
    .min(20, safeTranslate("error_message_minChars20"))
    .required(safeTranslate("error_message_employmentCircumstances")),
  reasonApplying: yup
    .string()
    .transform(asString)
    .min(20, safeTranslate("error_message_minChars20"))
    .required(safeTranslate("error_message_reasonApplying")),
});
