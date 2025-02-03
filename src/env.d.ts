interface ImportMetaEnv {
  VITE_BASE_URL: string | undefined;
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
