/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { PluginOption, defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() as PluginOption[]],
})
