import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: lazyPlugins(async () => {
    const { default: vue } = await import("@vitejs/plugin-vue");
    const { default: unocss } = await import("unocss/vite");
    return [vue(), unocss()];
  }),
});
