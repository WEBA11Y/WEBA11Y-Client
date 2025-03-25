import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import RootLayout from "../layouts/RootLayout";
import MainPage from "../pages/MainPage";
import ContentLayout from "../layouts/ContentLayout";
import HistoryPage from "../pages/HistoryPage";
import DetailHistoryPage from "../pages/DetailHistoryPage";
import DashboardPage from "../pages/DashboardPage";
import { PATH } from "../constants/path";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <MainLayout />
      </RootLayout>
    ),

    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <RootLayout>
        <AuthLayout />
      </RootLayout>
    ),
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
    path: "/history",
    element: (
      <RootLayout>
        <ContentLayout />
      </RootLayout>
    ),
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
        element: <DetailHistoryPage />,
      },
    ],
  },
  {
    path: PATH.DASHBOARD,
    element: (
      <RootLayout>
        <ContentLayout />
      </RootLayout>
    ),
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
