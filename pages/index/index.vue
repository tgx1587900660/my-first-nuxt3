<!-- 首页 -->
<template>
  <!-- 公共头部 -->
  <header class="app-header">
    <NuxtLink class="logo" to="/">
      <i class="iconfont Navbar_logo"></i>
    </NuxtLink>
    <a class="search" href="#">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <a class="face" href="#">
      <img src="@/assets/images/login.png" />
    </a>
    <div class="down-app">下载 APP</div>
  </header>

  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>

  <!-- 视频列表 -->
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="video-list">
      <NuxtLink class="v-card" v-for="item in displayList" :key="item.aid" :to="`/video/0`">
        <div class="card">
          <div class="card-img">
            <img class="pic" :src="item.pic" :alt="item.title" />
          </div>
          <div class="count">
            <span>
              <i class="iconfont icon_shipin_bofangshu"></i>
              {{ item.stat.view }}
            </span>
            <span>
              <i class="iconfont icon_shipin_danmushu"></i>
              {{ item.stat.danmaku }}
            </span>
          </div>
        </div>
        <p class="title">{{ item.title }}</p>
      </NuxtLink>
    </div>
  </van-list>
</template>

<script setup lang="ts">
import type { VideoItem } from '@/types/videoList.d.ts'

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
// 公共头部
.app-header {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      color: #fb7299;
      font-size: 28px;
    }
  }
  .search {
    padding: 0 8px;
    .ic_search_tab {
      color: #ccc;
      font-size: 22px;
    }
  }
  .face {
    padding: 0 15px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .down-app {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}

// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}

// 视频卡片
.v-card {
  width: 50%;
  padding: 0 5px 10px;
  .card {
    position: relative;
    background: #f3f3f3 url(@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 2px;
    overflow: hidden;
    .card-img {
      .pic {
        height: 100px;
        width: 100%;
        object-fit: cover;
      }
    }
    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 6px;
      span {
        .iconfont {
          font-size: 12px;
        }
      }
    }
  }
  .title {
    margin-top: 5px;
    font-size: 12px;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
