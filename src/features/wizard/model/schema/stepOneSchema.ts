import * as yup from "yup";
import countries from "../../../../shared/data/countries.json";
import { safeTranslate } from "../../../../lib/i18n";
import { GENDER_OPTIONS } from "../../../../shared/constants/selectOptions";
import type { Country } from "../../../../shared/types/country";

const COUNTRY_CODES = (countries as Country[]).map((c) => c.code);

export const stepOneSchema = yup.object({
  name: yup
    .string()
    .min(2, safeTranslate("error_message_min2"))
    .required(safeTranslate("error_message_required")),

  nationalId: yup
    .string()
    .min(6, safeTranslate("error_message_nationalId"))
    .required(safeTranslate("error_message_required")),

  dob: yup.string().required(safeTranslate("error_message_dob")),

  gender: yup
    .string()
    .oneOf(GENDER_OPTIONS, safeTranslate("error_message_gender"))
    .required(safeTranslate("error_message_gender")),

  address: yup
    .string()
    .min(3, safeTranslate("error_message_address"))
    .required(safeTranslate("error_message_required")),

  city: yup
    .string()
    .min(2, safeTranslate("error_message_city"))
    .required(safeTranslate("error_message_required")),

  state: yup
    .string()
    .min(2, safeTranslate("error_message_state"))
    .required(safeTranslate("error_message_required")),

  country: yup
    .string()
    .oneOf(COUNTRY_CODES, safeTranslate("error_message_country"))
    .required(safeTranslate("error_message_required")),

  phone: yup
    .string()
    .matches(/^[+]?[\d\s()-]{7,20}$/, safeTranslate("error_message_phone"))
    .required(safeTranslate("error_message_required")),

  email: yup
    .string()
    .email(safeTranslate("error_message_email"))
    .required(safeTranslate("error_message_required")),
});
