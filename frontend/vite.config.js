import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
export default defineConfig({
    plugins: [react()],
    envPrefix: "SITE_",
    server: {
        port: process.env.SITE_PORT,
    },
});
