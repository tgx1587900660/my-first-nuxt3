// 定义接口: defineEventHandler
// 使用接口: useFetch('/api/video') // get 方法可以省略第二个参数

import videolList from '@/database/video'

export default defineEventHandler(event => {
  return videolList
})
