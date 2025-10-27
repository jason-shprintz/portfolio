// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react({
      // Enable React Compiler for better optimization
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    // Add gzip compression
    compression({
      algorithm: "gzip",
      threshold: 1024, // Only compress files larger than 1kb
    }),
    // Add brotli compression for even better compression
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
    // Bundle analyzer (only in development or when ANALYZE=true)
    ...(process.env.ANALYZE
      ? [
          visualizer({
            filename: "dist/bundle-analysis.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  build: {
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Separate vendor libraries
          "react-vendor": ["react", "react-dom"],
          "styled-components": ["styled-components"],
          gsap: ["gsap"],
          "react-icons": ["react-icons/ri"],
        },
      },
    },
    // Enable minification
    minify: "terser",
    // Enable source maps for debugging (optional, increases size slightly)
    sourcemap: false,
    // Target modern browsers for smaller output
    target: "es2020",
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "styled-components"],
    exclude: ["gsap"], // GSAP works better when not pre-bundled
  },
});
