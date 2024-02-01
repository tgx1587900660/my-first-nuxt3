// 使用 createFromIconfontCN 方法创建 IconFont 组件
import { createFromIconfontCN } from '@ant-design/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
  const IconFont = createFromIconfontCN({
    // scriptUrl: '//at.alicdn.com/t/c/font_2708382_wgkealtgq0b.js' // iconfont.cn 的在线链接
    // 使用本地的字体文件
    scriptUrl: '/icon-font/iconfont.js'
  })
  nuxtApp.vueApp.component('IconFont', IconFont)
})
