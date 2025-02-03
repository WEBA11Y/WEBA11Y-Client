import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <MainLayout />
      </RootLayout>
    ),
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
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
