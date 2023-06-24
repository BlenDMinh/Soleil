import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("vite configuration for mode", mode);
  return {
    plugins: [react()],
    define: {
      "process.env": {},
    },
    build: {
      mode: "development",
      lib: {
        name: "MyLib",
        fileName: "mylib.production",
        entry: path.join(process.cwd(), "src/index.ts"),
      },
      rollupOptions: {
        external: "react",
        output: [
          {
            format: "umd",
            globals: { react: "react" },
            entryFileNames: `mylib.production.js`,
          },
        ],
      },
    },
  };
});
