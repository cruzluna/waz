import wasm from "vite-plugin-wasm";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({ start: { ssr: true }, plugins: [wasm()] });
