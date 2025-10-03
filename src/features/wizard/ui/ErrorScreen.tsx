import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Result
      status="error"
      title={t("submit_error_title")}
      subTitle={t("submit_error_subtitle")}
      extra={[
        <Button key="retry" type="primary" onClick={() => navigate(-1)}>
          {t("retry")}
        </Button>,
        <Button
          key="home"
          onClick={() => navigate("/step1", { replace: true })}
        >
          {t("back_to_start")}
        </Button>,
      ]}
    />
  );
};

export default ErrorScreen;
