import { useFormContext, Controller } from "react-hook-form";
import { Select, InputNumber, Button } from "antd";
import { useTranslation } from "react-i18next";
import {
  MARITAL_OPTIONS,
  EMPLOYMENT_OPTIONS,
  HOUSING_OPTIONS,
} from "../../../shared/constants/selectOptions";
import type { WizardValues } from "../model/types";

type Props = {
  goNext: () => void;
  goBack: () => void;
  onSaveDraft: () => void;
};

export const StepTwoFamilyInfo: React.FC<Props> = ({
  goBack,
  goNext,
  onSaveDraft,
}) => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<WizardValues>();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        goNext();
      }}
      className="space-y-4"
    >
      {/* Marital Status (AntD Select: keep simple) */}
      <div>
        <label>{t("maritalStatus")}</label>
        <Controller
          name="maritalStatus"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value || undefined}
              onChange={(v) => field.onChange(v ?? "")}
              onBlur={field.onBlur}
              placeholder={t("select")}
              className="w-full"
              allowClear
            >
              {MARITAL_OPTIONS.map((key) => (
                <Select.Option key={key} value={key}>
                  {t(key)}
                </Select.Option>
              ))}
            </Select>
          )}
        />
        {errors.maritalStatus && (
          <p className="text-red-600" role="alert">
            {String(errors.maritalStatus.message)}
          </p>
        )}
      </div>

      {/* Dependents (AntD InputNumber: add id + htmlFor) */}
      <div>
        <label htmlFor="dependentsCount">{t("dependents")}</label>
        <Controller
          name="dependentsCount"
          control={control}
          render={({ field }) => (
            <InputNumber
              id="dependentsCount"
              className="w-full"
              value={field.value as number | null}
              onChange={(v) => field.onChange(v)}
              min={0}
              step={1}
              controls
              placeholder="0"
            />
          )}
        />
        {errors.dependentsCount && (
          <p className="text-red-600" role="alert">
            {String(errors.dependentsCount.message)}
          </p>
        )}
      </div>

      {/* Employment Status (AntD Select: keep simple) */}
      <div>
        <label>{t("employmentStatus")}</label>
        <Controller
          name="employmentStatus"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value || undefined}
              onChange={(v) => field.onChange(v ?? "")}
              onBlur={field.onBlur}
              placeholder={t("select")}
              className="w-full"
              allowClear
            >
              {EMPLOYMENT_OPTIONS.map((key) => (
                <Select.Option key={key} value={key}>
                  {t(key)}
                </Select.Option>
              ))}
            </Select>
          )}
        />
        {errors.employmentStatus && (
          <p className="text-red-600" role="alert">
            {String(errors.employmentStatus.message)}
          </p>
        )}
      </div>

      {/* Monthly Income (AntD InputNumber: add id + htmlFor) */}
      <div>
        <label htmlFor="monthlyIncome">{t("monthlyIncome")}</label>
        <Controller
          name="monthlyIncome"
          control={control}
          render={({ field }) => (
            <InputNumber
              id="monthlyIncome"
              className="w-full"
              value={typeof field.value === "number" ? field.value : undefined}
              onChange={(v) => field.onChange(v)}
              min={0}
              step={100}
              controls
              placeholder="0"
            />
          )}
        />
        {errors.monthlyIncome && (
          <p className="text-red-600" role="alert">
            {String(errors.monthlyIncome.message)}
          </p>
        )}
      </div>

      {/* Housing Status (AntD Select: keep simple) */}
      <div>
        <label>{t("housingStatus")}</label>
        <Controller
          name="housingStatus"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value || undefined}
              onChange={(v) => field.onChange(v ?? "")}
              onBlur={field.onBlur}
              placeholder={t("select")}
              className="w-full"
              allowClear
            >
              {HOUSING_OPTIONS.map((key) => (
                <Select.Option key={key} value={key}>
                  {t(key)}
                </Select.Option>
              ))}
            </Select>
          )}
        />
        {errors.housingStatus && (
          <p className="text-red-600" role="alert">
            {String(errors.housingStatus.message)}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={goBack}>{t("back")}</Button>
        <Button onClick={onSaveDraft} htmlType="button">
          {t("saveDraft")}
        </Button>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          {t("next")}
        </Button>
      </div>
    </form>
  );
};

export default StepTwoFamilyInfo;
