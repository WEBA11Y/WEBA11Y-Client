interface ImportMetaEnv {
  VITE_BASE_URL: string | undefined;
  VITE_SENTRY_DSN: string;
  VITE_DEV: string;
  VITE_PRODUCT: string;
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_API_KEY: string;
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
