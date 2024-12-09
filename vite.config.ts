import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// import reactRefresh from '@vitejs/plugin-react-refresh'
// import dts from 'vite-plugin-dts'
// import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfeParent",
      filename: "remoteEntry.js",
      // remotes: {
      //   DiggitalLobbyHost: "http://localhost:3000/dist/assets/remoteEntry.js",
      // },
      exposes: {
        // "./EnterUsername": "./src/enter-username/enter-username",
        "./CardList": "./src/components/CardList/CardList.tsx",
      },
      shared: [
        "react",
        "react-dom",
        // "@reduxjs/toolkit",
        // "react-redux",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});