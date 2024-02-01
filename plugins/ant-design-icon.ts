// 导入所有图标库
import * as Icons from '@ant-design/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
  const icons = Icons
  for (const i in icons) {
    // @ts-ignore
    nuxtApp.vueApp.component(i, icons[i])
  }
})
