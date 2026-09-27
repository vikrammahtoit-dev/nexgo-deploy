import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

    Sitemap({
            hostname: "https://mynexgo.com",
            dynamicRoutes: [
                "/",
                "/privacy-policy",
                "/terms-services",
                "/refund-policy",
                "/cookie-policy",
                "/api-guides",
                "/faqs",
                "/shipping-guides",
                "/shipping-sop",
                "/pricing",
            ],
        }),
  ],
})
