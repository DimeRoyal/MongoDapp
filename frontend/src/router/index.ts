import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/layout/default";

export default createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "",
        Component: React.lazy(() => import("@/pages/dashboard")),
      },
      {
        path: "/coins",
        Component: React.lazy(() => import("@/pages/dashboard/coins")),
      },
    ],
  },
  {
    path: "/auth/:referralToken?",
    Component: React.lazy(() => import("@/pages/auth")),
  },
  {
    path: "*",
    Component: React.lazy(() => import("@/pages/error/notFound")),
  },
]);
