import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "siginIn",
        element: <SignInPage />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
