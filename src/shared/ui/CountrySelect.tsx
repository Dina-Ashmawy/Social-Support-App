import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCountries } from "../hooks/useCountries";
import type { Country } from "../types/country";

type Props = {
  name?: string;
  labelKey?: string;
  disabled?: boolean;
};

const CountrySelect: React.FC<Props> = ({
  name = "country",
  labelKey = "country",
  disabled = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { list, displayName } = useCountries();

  const fieldError = (errors as Record<string, { message?: string }>)[name]
    ?.message;
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {t(labelKey)}
      </label>

      <select
        id={name}
        {...register(name)}
        disabled={disabled}
        className="w-full rounded-lg border px-3 py-2"
        aria-invalid={!!fieldError || undefined}
        aria-describedby={fieldError ? errorId : undefined}
      >
        <option value="">{t("select")}</option>
        {list.map((country: Country) => (
          <option key={country.code} value={country.code}>
            {displayName(country)}
          </option>
        ))}
      </select>

      {fieldError && (
        <p id={errorId} role="alert" className="mt-1 text-xs text-red-600">
          {fieldError}
        </p>
      )}
    </div>
  );
};

export default CountrySelect;
