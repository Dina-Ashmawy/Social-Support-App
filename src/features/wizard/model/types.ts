export type WizardValues = {
  // Step 1
  name: string;
  nationalId: string;
  dob: string;
  gender: "male" | "female" | "other" | "";
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;

  // Step 2
  maritalStatus: string;
  dependentsCount: number | undefined;
  employmentStatus: string;
  monthlyIncome: number | undefined;
  housingStatus: string;

  //step 3
  situationCurrent: string;
  employmentCircumstances: string;
  reasonApplying: string;
};
