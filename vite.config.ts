import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { sentryVitePlugin } from "@sentry/vite-plugin";
export default () => {
  return defineConfig({
    plugins: [
      react(),
      //  Vite 빌드 시 Sentry에 자동으로 소스맵 업로드용
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        telemetry: false,
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
