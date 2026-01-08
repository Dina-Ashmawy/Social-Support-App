import { Steps } from "antd";
import { useTranslation } from "react-i18next";

type StepsBarProps = {
  currentStep: number;
  onStepChange?: (index: number) => void;
};

export default function StepsBar({ currentStep, onStepChange }: StepsBarProps) {
  const { t } = useTranslation();

  const steps = [
    { title: t("personalInfo") },
    { title: t("familyFinancialInfo") },
    { title: t("situationDescriptions") },
  ];

  return (
    <Steps
      current={currentStep}
      onChange={onStepChange}
      items={steps.map((s) => ({
        title: s.title,
        disabled: true,
      }))}
    />
  );
}
