<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/about">关于</NuxtLink></li>
          <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
          <li><NuxtLink to="/posts/1">文章1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">文章2</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <h1>欢迎来到首页</h1>
    <AppAlert> 这是一个自动导入的组件！！！！！ </AppAlert>
    <div>
      <span>img1</span>
      <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
      <br />
      <span>img2</span>
      <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
      <hr />
      <div>
        <span class="text">watch my color</span>
        <button @click="onToggleColor">toggle color</button>
      </div>
      <p :class="$style.red">This should be red</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const color = ref('red')

function onToggleColor() {
  if (color.value === 'pink') {
    color.value = 'deeppink'
  } else {
    color.value = 'pink'
  }
}

const route = useRoute()

// 当访问/posts/1时，route.params.id将为1
console.log(route)
</script>

<style lang="scss" scoped>
.text {
  color: v-bind(color);
}
</style>

<style module>
.red {
  color: red;
}
</style>
