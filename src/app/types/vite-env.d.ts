/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_DOMYLAND_TOKEN: string;
  readonly VITE_MAP_SRC: string;
  readonly VITE_PLUSCARDS_API_TOKEN: string;
  readonly VITE_SERVER: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
