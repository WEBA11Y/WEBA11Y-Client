import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";

export default function RootErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
      resetKeys={[location.pathname]}
    >
      {children}
    </ErrorBoundary>
  );
}
