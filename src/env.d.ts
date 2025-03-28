interface ImportMetaEnv {
  VITE_BASE_URL: string | undefined;
  VITE_SENTRY_DSN: string;
  VITE_MODE: "development" | "production";
  readonly VITE_SENTRY_AUTH_TOKEN: string;
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_API_KEY: string;
  readonly MODE: "development" | "production" | "staging";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
