import { useFormContext, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import type { WizardValues } from "../model/types";
import HelpMeWriteButton from "../../helpMeWrite/ui/HelpMeWriteButton";

const { TextArea } = Input;

type Props = {
  goBack: () => void;
  submit: () => void;
  onSaveDraft: () => void;
};

export const StepThreeSituationInfo: React.FC<Props> = ({
  goBack,
  submit,
  onSaveDraft,
}) => {
  const { t } = useTranslation();

  const {
    control,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useFormContext<WizardValues>();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="space-y-6"
      aria-label={t("situationDescriptions")}
    >
      {/* Current Financial Situation */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="font-medium" htmlFor="situationCurrent">
            {t("currentFinancialSituation")}
          </label>
          <HelpMeWriteButton
            topicKey="currentFinancialSituation"
            currentValue={getValues("situationCurrent") || ""}
            onAccept={(text) =>
              setValue("situationCurrent", text, { shouldDirty: true })
            }
          />
        </div>
        <Controller
          name="situationCurrent"
          control={control}
          render={({ field }) => (
            <TextArea
              id="situationCurrent"
              {...field}
              rows={6}
              placeholder={t("currentFinancialSituation")!}
              aria-invalid={!!errors.situationCurrent || undefined}
              aria-describedby={
                errors.situationCurrent ? "situationCurrent-error" : undefined
              }
            />
          )}
        />
        {errors.situationCurrent && (
          <p id="situationCurrent-error" role="alert" className="text-red-600">
            {String(errors.situationCurrent.message)}
          </p>
        )}
      </div>

      {/* Employment Circumstances */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="font-medium" htmlFor="employmentCircumstances">
            {t("employmentCircumstances")}
          </label>
          <HelpMeWriteButton
            topicKey="employmentCircumstances"
            currentValue={getValues("employmentCircumstances") || ""}
            onAccept={(text) =>
              setValue("employmentCircumstances", text, { shouldDirty: true })
            }
          />
        </div>
        <Controller
          name="employmentCircumstances"
          control={control}
          render={({ field }) => (
            <TextArea
              id="employmentCircumstances"
              {...field}
              rows={6}
              placeholder={t("employmentCircumstances")!}
              aria-invalid={!!errors.employmentCircumstances || undefined}
              aria-describedby={
                errors.employmentCircumstances
                  ? "employmentCircumstances-error"
                  : undefined
              }
            />
          )}
        />
        {errors.employmentCircumstances && (
          <p
            id="employmentCircumstances-error"
            role="alert"
            className="text-red-600"
          >
            {String(errors.employmentCircumstances.message)}
          </p>
        )}
      </div>

      {/* Reason for Applying */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="font-medium" htmlFor="reasonApplying">
            {t("reasonForApplying")}
          </label>
          <HelpMeWriteButton
            topicKey="reasonForApplying"
            currentValue={getValues("reasonApplying") || ""}
            onAccept={(text) =>
              setValue("reasonApplying", text, { shouldDirty: true })
            }
          />
        </div>
        <Controller
          name="reasonApplying"
          control={control}
          render={({ field }) => (
            <TextArea
              id="reasonApplying"
              {...field}
              rows={6}
              placeholder={t("reasonForApplying")!}
              aria-invalid={!!errors.reasonApplying || undefined}
              aria-describedby={
                errors.reasonApplying ? "reasonApplying-error" : undefined
              }
            />
          )}
        />
        {errors.reasonApplying && (
          <p id="reasonApplying-error" role="alert" className="text-red-600">
            {String(errors.reasonApplying.message)}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={goBack}>{t("back")}</Button>
        <Button onClick={onSaveDraft} htmlType="button">
          {t("saveDraft")}
        </Button>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          {t("submit")}
        </Button>
      </div>
    </form>
  );
};

export default StepThreeSituationInfo;
