import { Suspense } from "react";

import Header from "../components/Header";
import Loading from "../components/Loading";
import RootErrorBoundary from "../components/RootErrorBoundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <RootErrorBoundary>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </RootErrorBoundary>
    </div>
  );
}
