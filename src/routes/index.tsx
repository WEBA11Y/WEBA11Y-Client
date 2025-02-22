import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import RootLayout from "../layouts/RootLayout";
import MainPage from "../pages/MainPage";
import ContentLayout from "../layouts/ContentLayout";
import DetailHistory from "../pages/DetailHistory";

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
        path: "/",
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
        path: ":history_id",
        element: <DetailHistory />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
