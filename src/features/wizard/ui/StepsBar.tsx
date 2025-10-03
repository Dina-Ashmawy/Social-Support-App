import { Steps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function StepsBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Define steps
  const steps = [
    { path: "/step1", title: t("personalInfo") },
    { path: "/step2", title: t("familyFinancialInfo") },
    { path: "/step3", title: t("situationDescriptions") },
  ];

  // Find active index
  const current = steps.findIndex((s) => s.path === location.pathname);

  // Hide on success screen
  if (location.pathname === "/success") return null;

  return (
    <Steps
      current={current === -1 ? 0 : current}
      onChange={(index) => navigate(steps[index].path)}
      items={steps.map((s) => ({
        title: s.title,
        disabled: true,
      }))}
    />
  );
}
