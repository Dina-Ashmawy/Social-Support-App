import React, { useState } from "react";
import { Button, message } from "antd";
import { useTranslation } from "react-i18next";
import HelpMeWriteModal, { type HelpMode } from "./HelpMeWriteModal";
import { generateSuggestion } from "../../../api/openai";

type Props = {
  topicKey: string;
  currentValue: string;
  onAccept: (text: string) => void;
};

const HelpMeWriteButton: React.FC<Props> = ({
  topicKey,
  currentValue,
  onAccept,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<HelpMode>("loading");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const buildPrompt = () => {
    const base = t("ai_prompt_template", { topic: t(topicKey) });
    const notes = currentValue?.trim()
      ? `\n${t("ai_user_notes_prefix")}\n${currentValue.trim()}`
      : "";
    return `${base}${notes}`;
  };

  const fetchSuggestion = async () => {
    if (loading) return;
    setMode("loading");
    setLoading(true);
    setErrorMsg("");
    setText("");

    try {
      const suggestion = await generateSuggestion(buildPrompt());
      setText(suggestion);
      setMode("preview");
    } catch (e) {
      const code = e instanceof Error ? e.message : String(e);
      const friendly =
        {
          MISSING_OPENAI_KEY: t("ai_error_missing_key"),
          INVALID_OPENAI_KEY: t("ai_error_invalid_key"),
          RATE_LIMITED: t("ai_error_rate_limited"),
          REQUEST_TIMEOUT: t("ai_error_timeout"),
          NO_SUGGESTION: t("ai_error_generic"),
        }[code] || t("ai_error_generic");
      setErrorMsg(friendly);
      setMode("error");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    if (open || loading) return;
    setOpen(true);
    void fetchSuggestion();
  };

  const resetState = () => {
    setMode("loading");
    setText("");
    setErrorMsg("");
  };

  const closeModal = () => {
    setOpen(false);
    resetState();
  };

  const accept = () => {
    const textValue = text.trim();
    if (!textValue.length) {
      message.warning(t("ai_error_generic"));
      return;
    }
    onAccept(textValue);
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal} disabled={loading}>
        {t("helpMeWrite")}
      </Button>

      <HelpMeWriteModal
        open={open}
        mode={mode}
        text={text}
        loading={loading}
        errorMsg={errorMsg}
        onClose={closeModal}
        onAccept={accept}
        onEdit={() => setMode("edit")}
        onRetry={fetchSuggestion}
        onChange={setText}
      />
    </>
  );
};

export default HelpMeWriteButton;
