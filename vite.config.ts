import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { sentryVitePlugin } from "@sentry/vite-plugin";
export default () => {
  return defineConfig({
    plugins: [
      react(),
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "weba11y",
        project: "weba11y",
      }),
    ],
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      ],
    },
    build: {
      outDir: "./dist",
      sourcemap: true,
    },
  });
};
