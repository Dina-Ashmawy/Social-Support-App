import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import countries from "../data/countries.json";
import type { Country } from "../types/country";

export function useCountries() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const list = useMemo(
    () =>
      (countries as Country[]).slice().sort((a, b) => {
        const aName = isArabic ? a.nameAr : a.nameEn;
        const bName = isArabic ? b.nameAr : b.nameEn;
        return aName.localeCompare(bName);
      }),
    [isArabic]
  );

  const displayName = (c: Country) => (isArabic ? c.nameAr : c.nameEn);

  const codes = useMemo(() => list.map((c) => c.code), [list]);

  return { list, codes, displayName };
}
