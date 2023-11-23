<template>
  <!-- nuxt 有基于文件的路由系统 -->

  <!-- NuxtLink 相当于 RouterLink -->
  <!-- 首页 index/index.vue -->
  <NuxtLink to="/">首页</NuxtLink>
  <!-- 视频页 video/index.vue -->
  <NuxtLink to="/video">视频页</NuxtLink>

  <!-- NuxtPage 相当于 RouterView -->
  <NuxtPage></NuxtPage>
</template>
