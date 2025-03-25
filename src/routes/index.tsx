import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ContentLayout from "../layouts/ContentLayout";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HistoryPage from "../pages/HistoryPage";
import DetailHistoryPage from "../pages/DetailHistoryPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import { PATH } from "../constants/path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <MainPage />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <SignInPage />,
          },
          {
            path: "signup",
            element: <SignUpPage />,
          },
        ],
      },
      {
        path: "history",
        element: <ContentLayout />,
        children: [
          {
            path: "",
            element: (
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <HistoryPage />
              </ProtectedRoute>
            ),
          },
          {
            path: ":history_id",
            element: (
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <DetailHistoryPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: PATH.DASHBOARD,
        element: <ContentLayout />,
        children: [
          {
            path: "",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
