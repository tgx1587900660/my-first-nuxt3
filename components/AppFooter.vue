<template>
  <van-tabs class="app-footer" @click-tab="onClick('/icon-font')">
    <van-tab :title="'icon-font'"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
function onClick(url: string) {
  // console.log('url :>> ', url)
  window.open(url, url)
}
</script>

<style lang="scss">
.app-footer {
  color: $secondary;
  position: sticky;
  bottom: 0;
  background-color: $secondary;
  color: #fff;
  text-align: center;
}
</style>
