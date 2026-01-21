import React from "react";
import { useRouteError } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

const ErrorFallback = () => {
  const error = useRouteError();
  const { t } = useTranslation();
  console.error(error); // Logs the error for debugging

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-center">
      <h1 className="text-4xl font-bold text-red-600">{t("error.somethingWentWrong")}</h1>
      <p className="text-lg text-gray-700 mt-4">
        {t("error.errorMessage")}
      </p>
      <p className="mt-2 text-gray-500">{error?.message || t("error.unknownError")}</p>
      <a href="/" className="mt-6 px-6 py-3 bg-orange text-white rounded-lg">
        {t("error.goToHome")}
      </a>
    </div>
  );
};

export default ErrorFallback;
