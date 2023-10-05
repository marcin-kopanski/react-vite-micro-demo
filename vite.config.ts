import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "react-vite-micro-demo",
      filename: "microDemo.js",
      exposes: {
        "./Routes": "./src/components/MicroDemoRoutes",
      },
      shared: ["react"],
    }),
  ],
  server: {
    proxy: { "/api": { target: "http://localhost:3000", changeOrigin: true } },
  },
  preview: {
    host: "localhost",
    port: 5002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
