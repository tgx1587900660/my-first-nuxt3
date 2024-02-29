<template>
  <h1>测试 tailwindCSS</h1>
  <hr />
  <div class="text-3xl font-bold underline">Hello world!</div>
  <hr />
  <div class="w-[200px] h-[100px] bg-slate-300 group">
    <TextVue></TextVue>
  </div>
</template>

<script setup lang="ts">
import TextVue from './text.vue'
</script>

<style lang="less" scoped></style>
