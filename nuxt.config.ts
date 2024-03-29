// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 是否开启 ssr, 默认开启
  // ssr: false,
  devtools: { enabled: true },
  // 应用模块
  modules: ['@vant/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        },
        sass: {
          additionalData: '@use "@/assets/_colors.sass" as *\n'
        }
      }
    }
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    }
  },
  css: ['~/assets/css/base.scss', '~/assets/css/iconfont.scss', '~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      // 添加 tailwindcss 配置
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
