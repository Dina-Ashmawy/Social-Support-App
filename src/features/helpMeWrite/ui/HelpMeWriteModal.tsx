import React, { useEffect, useRef } from "react";
import { Modal, Input, Typography, Alert, Space, Button } from "antd";
import { useTranslation } from "react-i18next";

export type HelpMode = "loading" | "preview" | "edit" | "error";

type Props = {
  open: boolean;
  mode: HelpMode;
  text: string;
  loading: boolean;
  errorMsg?: string;
  onClose: () => void;
  onAccept: () => void;
  onEdit: () => void;
  onRetry: () => void;
  onChange: (value: string) => void;
};

const HelpMeWriteModal: React.FC<Props> = ({
  open,
  mode,
  text,
  loading,
  errorMsg,
  onClose,
  onAccept,
  onEdit,
  onRetry,
  onChange,
}) => {
  const { t } = useTranslation();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // focus when entering edit mode
  useEffect(() => {
    if (mode === "edit") {
      const id = setTimeout(() => textareaRef.current?.focus(), 0);
      return () => clearTimeout(id);
    }
  }, [mode]);

  const charCount = text.length;

  return (
    <Modal
      open={open}
      title={t("ai_suggestion")}
      onCancel={onClose}
      footer={
        <Space>
          <Button onClick={onClose}>{t("discard")}</Button>
          {mode === "preview" && <Button onClick={onEdit}>{t("edit")}</Button>}
          <Button
            type="primary"
            onClick={onAccept}
            disabled={mode === "loading" || mode === "error" || !text.trim()}
            loading={loading}
          >
            {t("accept")}
          </Button>
        </Space>
      }
    >
      {mode === "loading" && (
        <Typography.Paragraph>{t("ai_loading")}</Typography.Paragraph>
      )}

      {mode === "error" && (
        <Alert
          type="error"
          showIcon
          message={t("ai_error_title")}
          description={
            <Space direction="vertical" style={{ width: "100%" }}>
              <Typography.Text>{errorMsg}</Typography.Text>
              <div>
                <Button onClick={onRetry}>{t("retry", "Retry")}</Button>
              </div>
            </Space>
          }
        />
      )}

      {mode !== "error" && (
        <>
          <Input.TextArea
            ref={textareaRef}
            rows={8}
            value={text}
            readOnly={mode === "preview"}
            onChange={(e) => onChange(e.target.value)}
            placeholder={t("ai_loading")!}
            onKeyDown={(e) => {
              if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                e.preventDefault();
                if (text.trim()) onAccept();
              }
              if (e.key === "Escape") {
                e.preventDefault();
                onClose();
              }
            }}
          />
          {!!text && (
            <Typography.Text type="secondary">
              {t("charCount", { count: charCount })}
            </Typography.Text>
          )}
          {mode === "preview" && (
            <Typography.Paragraph
              style={{
                marginTop: 12,
                fontSize: "13px",
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span role="img" aria-label="info">
                ℹ️
              </span>
              {t("ai_edit_before_accept")}
            </Typography.Paragraph>
          )}
        </>
      )}
    </Modal>
  );
};

export default HelpMeWriteModal;
