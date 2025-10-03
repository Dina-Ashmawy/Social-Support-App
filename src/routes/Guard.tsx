import React from "react";
import { Navigate } from "react-router-dom";

type GuardProps = {
  require: string;
  to: string;
  children: React.ReactElement;
};

export default function Guard({ require, to, children }: GuardProps) {
  const ok = localStorage.getItem(require) === "true";
  return ok ? children : <Navigate to={to} replace />;
}
