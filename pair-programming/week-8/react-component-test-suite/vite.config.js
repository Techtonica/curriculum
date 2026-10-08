import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest settings: run tests in a simulated browser (jsdom), and make
  // describe, test, and expect available without importing them
  test: {
    environment: "jsdom",
    globals: true
  }
});
