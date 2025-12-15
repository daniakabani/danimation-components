import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const isLib = mode === "lib";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        helpers: path.resolve(__dirname, "src/helpers"),
        handlers: path.resolve(__dirname, "src/handlers"),
        routes: path.resolve(__dirname, "src/routes"),
        pages: path.resolve(__dirname, "src/pages"),
        providers: path.resolve(__dirname, "src/providers"),
        stateReducer: path.resolve(__dirname, "src/stateReducer"),
        svgs: path.resolve(__dirname, "src/svgs"),
        utilities: path.resolve(__dirname, "src/utilities"),
        main: path.resolve(__dirname, "src/main"),
      },
    },
    server: {
      port: 4000,
      open: true,
    },
    build: isLib
      ? {
          lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "DanimationComponents",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
          },
          rollupOptions: {
            external: ["react", "react-dom", "styled-components"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "styled-components": "styled",
              },
            },
          },
        }
      : undefined,
  };
});
