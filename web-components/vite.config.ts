import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "fast-design-system",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: /^@microsoft\/fast-(element|components)/,
    },
  },
});
