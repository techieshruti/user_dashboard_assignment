import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/user_dashboard_assignment/",
  build: {
    outDir: "docs",
  },
});
