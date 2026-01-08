import { useFormContext, Controller } from "react-hook-form";
import { Input, Select, DatePicker, Button } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useCountries } from "../../../shared/hooks/useCountries";
import type { WizardValues } from "../model/types";
import { GENDER_OPTIONS } from "../../../shared/constants/selectOptions";
import type { Country } from "../../../shared/types/country";

type Props = {
  goNext: () => void;
  onSaveDraft: () => void;
};

export const StepOnePersonalInfo: React.FC<Props> = ({
  goNext,
  onSaveDraft,
}) => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<WizardValues>();
  const { list, displayName } = useCountries();
  const err = (key: keyof WizardValues) =>
    errors[key]?.message as string | undefined;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        goNext();
      }}
      className="space-y-4"
      aria-label={t("personalInfo")}
    >
      {" "}
      {/* Name */}
      <div>
        <label htmlFor="name">{t("name")}</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              id="name"
              {...field}
              placeholder={t("name")}
              aria-invalid={!!err("name") || undefined}
              aria-describedby={err("name") ? "name-error" : undefined}
            />
          )}
        />
        {err("name") && (
          <p id="name-error" role="alert" className="text-red-600">
            {String(err("name"))}
          </p>
        )}
      </div>
      {/* Email */}
      <div>
        <label htmlFor="email">{t("email")}</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              type="email"
              {...field}
              placeholder={t("email")}
              aria-invalid={!!err("email") || undefined}
              aria-describedby={err("email") ? "email-error" : undefined}
            />
          )}
        />
        {err("email") && (
          <p id="email-error" role="alert" className="text-red-600">
            {String(err("email"))}
          </p>
        )}
      </div>
      {/* National ID */}
      <div>
        <label htmlFor="nationalId">{t("nationalId")}</label>
        <Controller
          name="nationalId"
          control={control}
          render={({ field }) => (
            <Input
              id="nationalId"
              {...field}
              placeholder={t("nationalId")}
              aria-invalid={!!err("nationalId") || undefined}
              aria-describedby={
                err("nationalId") ? "nationalId-error" : undefined
              }
            />
          )}
        />
        {err("nationalId") && (
          <p id="nationalId-error" role="alert" className="text-red-600">
            {String(err("nationalId"))}
          </p>
        )}
      </div>
      {/* Date of Birth (AntD handles ARIA; keep it simple) */}
      <div>
        <label htmlFor="dob">{t("dob")}</label>
        <Controller
          name="dob"
          control={control}
          render={({ field }) => {
            const parsed = field.value
              ? dayjs(field.value, "YYYY-MM-DD", true)
              : null;
            const value = parsed && parsed.isValid() ? parsed : null;
            return (
              <DatePicker
                id="dob"
                className="w-full"
                placeholder={t("dob")}
                format="YYYY-MM-DD"
                value={value}
                onChange={(d) =>
                  field.onChange(d ? d.format("YYYY-MM-DD") : "")
                }
                onBlur={field.onBlur}
                allowClear
                inputReadOnly
                status={err("dob") ? "error" : undefined}
              />
            );
          }}
        />
        {err("dob") && (
          <p id="dob-error" role="alert" className="text-red-600">
            {String(err("dob"))}
          </p>
        )}
      </div>
      {/* Gender (AntD Select: no extra ARIA) */}
      <div>
        <label htmlFor="gender">{t("gender")}</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select
              id="gender"
              value={field.value || undefined}
              onChange={(v) => field.onChange(v ?? "")}
              onBlur={field.onBlur}
              placeholder={t("select")}
              className="w-full"
              allowClear
              status={err("gender") ? "error" : undefined}
            >
              {GENDER_OPTIONS.map((gender) => (
                <option key={gender} value={gender}>
                  {t(gender)}
                </option>
              ))}
            </Select>
          )}
        />
        {err("gender") && (
          <p id="gender-error" role="alert" className="text-red-600">
            {String(err("gender"))}
          </p>
        )}
      </div>
      {/* Country (AntD Select: no extra ARIA) */}
      <div>
        <label htmlFor="country">{t("country")}</label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              id="country"
              value={field.value || undefined}
              onChange={(v) => field.onChange(v ?? "")}
              onBlur={field.onBlur}
              placeholder={t("select")}
              className="w-full"
              allowClear
              status={err("country") ? "error" : undefined}
            >
              {list.map((c: Country) => (
                <Select.Option key={c.code} value={c.code}>
                  {displayName(c)}
                </Select.Option>
              ))}
            </Select>
          )}
        />
        {err("country") && (
          <p id="country-error" role="alert" className="text-red-600">
            {String(err("country"))}
          </p>
        )}
      </div>
      {/* City */}
      <div>
        <label htmlFor="city">{t("city")}</label>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Input
              id="city"
              {...field}
              placeholder={t("city")}
              aria-invalid={!!err("city") || undefined}
              aria-describedby={err("city") ? "city-error" : undefined}
            />
          )}
        />
        {err("city") && (
          <p id="city-error" role="alert" className="text-red-600">
            {String(err("city"))}
          </p>
        )}
      </div>
      {/* State */}
      <div>
        <label htmlFor="state">{t("state")}</label>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Input
              id="state"
              {...field}
              placeholder={t("state")}
              aria-invalid={!!err("state") || undefined}
              aria-describedby={err("state") ? "state-error" : undefined}
            />
          )}
        />
        {err("state") && (
          <p id="state-error" role="alert" className="text-red-600">
            {String(err("state"))}
          </p>
        )}
      </div>
      {/* Address */}
      <div>
        <label htmlFor="address">{t("address")}</label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input
              id="address"
              {...field}
              placeholder={t("address")}
              aria-invalid={!!err("address") || undefined}
              aria-describedby={err("address") ? "address-error" : undefined}
            />
          )}
        />
        {err("address") && (
          <p id="address-error" role="alert" className="text-red-600">
            {String(err("address"))}
          </p>
        )}
      </div>
      {/* Phone */}
      <div>
        <label htmlFor="phone">{t("phone")}</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              id="phone"
              {...field}
              placeholder={t("phone")}
              aria-invalid={!!err("phone") || undefined}
              aria-describedby={err("phone") ? "phone-error" : undefined}
            />
          )}
        />
        {err("phone") && (
          <p id="phone-error" role="alert" className="text-red-600">
            {String(err("phone"))}
          </p>
        )}
      </div>
      {/* actions */}
      <div className="flex  gap-2 pt-2">
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
