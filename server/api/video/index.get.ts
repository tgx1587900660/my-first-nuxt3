// 定义接口: defineEventHandler
// 使用接口: useFetch('/api/video')

import videolList from '@/database/video'

export default defineEventHandler(event => {
  return videolList
})
