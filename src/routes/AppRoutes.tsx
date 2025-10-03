import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../shared/ui/Layout";
import Home from "../pages/Home";
import ErrorScreen from "../features/wizard/ui/ErrorScreen";
import Wizard from "../pages/Wizard";
import SuccessScreen from "../features/wizard/ui/SuccessScreen";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/createApp" element={<Wizard />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
