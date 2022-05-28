/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_ACCESS_TOKEN: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_MAP_LIGHT_URL: string;
  readonly VITE_MAP_DARK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
