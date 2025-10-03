import React from "react";
import { useWizard } from "../../features/wizard/useWizard";
import { StepOnePersonalInfo } from "../../features/wizard/ui/StepOnePersonalInfo";
import StepTwoFamilyInfo from "../../features/wizard/ui/StepTwoFamilyInfo";
import StepThreeSituationInfo from "../../features/wizard/ui/StepThreeSituationInfo";

const Wizard: React.FC = () => {
  const {
    FormProvider,
    methods,
    step,
    goNext,
    goBack,
    onSaveDraft,
    onFinalSubmit,
  } = useWizard();

  return (
    <FormProvider {...methods}>
      {step === 0 && (
        <StepOnePersonalInfo goNext={goNext} onSaveDraft={onSaveDraft} />
      )}
      {step === 1 && (
        <StepTwoFamilyInfo
          goNext={goNext}
          goBack={goBack}
          onSaveDraft={onSaveDraft}
        />
      )}
      {step === 2 && (
        <StepThreeSituationInfo
          submit={onFinalSubmit}
          goBack={goBack}
          onSaveDraft={onSaveDraft}
        />
      )}
    </FormProvider>
  );
};

export default Wizard;
