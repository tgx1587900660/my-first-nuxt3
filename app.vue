<template>
  <!-- nuxt 有基于文件的路由系统, 无需导入组件，只要按照nuxt规定的目录结构写代码，就可以使用vue组件-->

  <!-- NuxtLink 相当于 RouterLink -->

  <!-- 首页 index/index.vue -->
  <!-- <NuxtLink to="/">首页</NuxtLink> -->
  <!-- 视频页 video/index.vue -->
  <!-- <NuxtLink to="/video">视频页</NuxtLink> -->

  <!-- NuxtPage 相当于 RouterView 默认会去 pages/index 里面找到index.vue 作为首页 -->
  <!-- keepalive 最大缓存10个页面 -->
  <NuxtPage :keepalive="{ max: 10 }"></NuxtPage>
</template>

<script setup lang="ts">
// SEO 优化信息: useSeoMeta 是 nuxt3 自带的函数
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description: 'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  // 搜索关键词
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
  // 绕开 B站 防盗链, 这样就可以加载图片了
  referrer: 'no-referrer'
})
</script>

<style lang="scss">
/* vant-ui 主题定制 */
:root {
  // 测试一下 van-button 主要按钮有没有变成 #fb7299
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
