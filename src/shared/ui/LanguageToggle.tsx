import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language.startsWith("ar");
  return (
    <button
      onClick={() => i18n.changeLanguage(isAr ? "en" : "ar")}
      aria-label={isAr ? t("switchToEnglish") : t("switchToArabic")}
    >
      {isAr ? "English" : "العربية"}
    </button>
  );
}

export default LanguageToggle;
