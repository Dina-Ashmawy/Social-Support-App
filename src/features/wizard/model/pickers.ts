import type { WizardValues } from "./types";

export const pickStepOne = (values: WizardValues) => ({
  name: values.name,
  nationalId: values.nationalId,
  dob: values.dob,
  gender: values.gender,
  address: values.address,
  city: values.city,
  state: values.state,
  country: values.country,
  phone: values.phone,
  email: values.email,
});

export const pickStepTwo = (values: WizardValues) => ({
  maritalStatus: values.maritalStatus,
  dependentsCount: values.dependentsCount,
  employmentStatus: values.employmentStatus,
  monthlyIncome: values.monthlyIncome,
  housingStatus: values.housingStatus,
});

export const pickStepThree = (values: WizardValues) => ({
  situationCurrent: values.situationCurrent,
  employmentCircumstances: values.employmentCircumstances,
  reasonApplying: values.reasonApplying,
});
