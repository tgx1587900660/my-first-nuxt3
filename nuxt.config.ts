// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  // postcss: {
  //   plugins: {
  //     'postcss-nested': {},
  //     'postcss-custom-media': {}
  //   }
  // }
})
