import { useTranslation } from "react-i18next";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const { i18n } = useTranslation();
  const dir = i18n.language.startsWith("ar") ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900"
    >
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
    </div>
  );
}
