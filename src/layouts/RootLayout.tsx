import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Loading from "../components/Loading";
import RootErrorBoundary from "../components/RootErrorBoundary";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <RootErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </RootErrorBoundary>
    </div>
  );
}
