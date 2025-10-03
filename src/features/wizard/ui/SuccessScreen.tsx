import React from "react";
import { Result, Button } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SuccessScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const appId = params.get("appId");

  return (
    <Result
      status="success"
      title={t("submit_success_title")}
      subTitle={t("submit_success_subtitle", { id: appId || "—" })}
      extra={[
        <Button
          type="primary"
          key="new"
          onClick={() => navigate("/step1", { replace: true })}
        >
          {t("start_new_application")}
        </Button>,
        <Button key="home" onClick={() => navigate("/", { replace: true })}>
          {t("go_home")}
        </Button>,
      ]}
    />
  );
};

export default SuccessScreen;
