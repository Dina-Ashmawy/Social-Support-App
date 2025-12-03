import React from "react";
import { Card } from "antd";
import StepsBar from "../../features/wizard/ui/StepsBar";
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
    <div className="space-y-6">
      <Card className="shadow-sm w-full max-w-4xl text-center">
        <StepsBar currentStep={step} />
      </Card>

      {/* Form card */}
      <Card className="shadow-sm w-full max-w-4xl">
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
      </Card>
    </div>
  );
};

export default Wizard;
