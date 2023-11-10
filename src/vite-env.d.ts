/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_HOST: string
  readonly VITE_APP_PORT: string
  readonly VITE_BASE_API: string
  readonly VITE_API_SECRET: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
