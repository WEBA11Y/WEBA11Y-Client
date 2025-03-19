import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";

import App from "./App";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  environment: import.meta.env.VITE_DEV,
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(<App />);
