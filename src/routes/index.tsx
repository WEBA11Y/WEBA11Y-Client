import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
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
    errorElement: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: (
      <RootLayout>
        <AuthLayout />
      </RootLayout>
    ),
    errorElement: <NotFoundPage />,
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
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HistoryPage />,
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
    errorElement: <NotFoundPage />,
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
