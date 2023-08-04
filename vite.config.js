import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// const ASSET_URI = import.meta.env.VITE_ASSET_URI || "/dist";

// https://vitejs.dev/config/
// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   const ASSET_URI = process.env.VITE_ASSET_URI || "./dist/";
//   console.log(ASSET_URI);
//   return defineConfig({
//     plugins: [react()],
//     base: ASSET_URI,
//     build: {
//       outDir: ASSET_URI,
//     },
//   });
// };

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const ASSET_URI = env.VITE_ASSET_URI || "./dist/";
  console.log(ASSET_URI);
  return {
    plugins: [react()],
    base: [...ASSET_URI].slice(1).join(""),
    build: {
      outDir: ASSET_URI,
    },
  };
});
