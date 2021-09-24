import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus 自动导入配置
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element-plus 自动导入配置
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
