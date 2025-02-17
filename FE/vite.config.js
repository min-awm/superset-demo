import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "../BE/public", // Thay đổi thư mục output thành "public"
    emptyOutDir: true, // Xóa thư mục trước khi build
  },
})
