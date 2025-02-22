import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      ],
    },
    build: {
      outDir: "./dist",
    },
  });
};
