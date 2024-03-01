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

  <h4>========= 基于父状态的样式 =============</h4>
  <a
    href="#"
    class="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
  >
    <div class="flex items-center space-x-3">
      <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
      <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">New project</h3>
    </div>
    <p class="text-sm text-slate-500 group-hover:text-white">
      Create a new project from a variety of starting templates.
    </p>
  </a>

  <h4>========= 深色模式 =============</h4>
  <div class="rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
    <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">Writes Upside-Down</h3>
    <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
      The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
    </p>
    <h1 class="text-[deeppink] dark:text-[pink]">text</h1>
  </div>
</template>

<script setup lang="ts">
import TextVue from './text.vue'
</script>

<style lang="less" scoped></style>
