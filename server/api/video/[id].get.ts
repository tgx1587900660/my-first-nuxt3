// get /api/video/id
import videolList from '@/database/video'

export default defineEventHandler(event => {
  const { id } = event.context.params || {}

  // 根据 id 查找视频
  return videolList.find(item => item.bvid === id)
})
