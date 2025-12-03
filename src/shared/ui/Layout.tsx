import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { Card } from "antd";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { t: translate } = useTranslation();

  return (
    <div className="space-y-6">
      <header role="banner" className="flex items-center justify-between">
        <h1
          id="page-title"
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          {translate("appTitle")}
        </h1>
        <LanguageToggle />
      </header>

      <main id="main" role="main" aria-labelledby="page-title">
        <div className="flex flex-col gap-6 items-center">
          <Card className="shadow-sm w-full max-w-4xl">
            <Outlet />
          </Card>
        </div>
      </main>
    </div>
  );
}
