<!-- 首页 -->
<template>
  <!-- 公共头部 -->
  <AppHeader></AppHeader>

  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>

  <!-- 视频列表 -->
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="video-list">
      <AppVideo v-for="item in displayList" :key="item.aid" :item="item"></AppVideo>
    </div>
  </van-list>

  <AppFooter />
</template>

<script setup lang="ts">
import type { VideoItem } from '@/types/videoList'

// useFetch 是nuxt3自带的函数，用来请求 server 目录中的接口

// 接口请求
const { data: channelList } = await useFetch('/api/channel', { method: 'get' })
// console.log('channelList :>> ', channelList)

// 默认是 get
const { data: videolList } = await useFetch('/api/video')
// console.log('videolList :>> ', videolList)

const displayList = ref<VideoItem[]>([])
const loading = ref(false)
const finished = ref(false)

let page = 1
const pageSize = 20

const onLoad = () => {
  // 加载状态结束
  loading.value = false

  // 追加内容
  const data = videolList.value?.slice((page - 1) * pageSize, page * pageSize) as VideoItem[]
  displayList.value?.push(...data)

  // 数据全部加载完成
  if (videolList.value?.length === displayList.value?.length) {
    finished.value = true
  }
  page++
}

onLoad() // 需要调用一下，便于 seo 抓取内容
</script>

<style lang="scss">
// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
