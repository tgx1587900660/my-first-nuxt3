<template>
  <h1>测试 tailwindCSS</h1>
  <hr />
  <div class="text-3xl font-bold underline">Hello world!</div>
  <hr />
  <div class="group h-[100px] w-[200px] bg-slate-300">
    <TextVue></TextVue>
  </div>

  <button class="bg-sky-500 hover:bg-sky-700">Save changes</button>
  <button class="hover:bg-fuchsia-600">Save changes</button>
  <h4>========= Hover, focus, and active 悬停、聚焦和活动 =============</h4>
  <button
    class="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-[pink]"
  >
    Save changes
  </button>
</template>

<script setup lang="ts">
import TextVue from './text.vue'
</script>

<style lang="less" scoped></style>
