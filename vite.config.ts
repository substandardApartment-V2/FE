import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from "vite-plugin-radar";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_NAVER_MAP_CLIENT_ID,
          },
        },
      }),
      VitePluginRadar({
        analytics: {
          id: env.VITE_PUBLIC_GOOGLE_ANALYTICS,
        },
      }),
    ],
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
  };
});
