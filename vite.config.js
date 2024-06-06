import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: [
      "react",
      "react-router",
      "react-router-dom",
      "react-icons/bs",
      "react-icons/gi",
    ],
    output: {
      globals: {
        react: "React",
      },
    },
  },
});
