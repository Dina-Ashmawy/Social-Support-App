import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { Card } from "antd";
import StepsBar from "../../features/wizard/ui/StepsBar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { t: translate } = useTranslation();
  const { pathname } = useLocation();

  // show StepsBar only on step1, step2, step3
  const showSteps = ["/step1", "/step2", "/step3"].includes(pathname);

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
          {showSteps && (
            <Card className="shadow-sm w-full max-w-4xl text-center">
              <StepsBar />
            </Card>
          )}

          <Card className="shadow-sm w-full max-w-4xl">
            <Outlet />
          </Card>
        </div>
      </main>
    </div>
  );
}
