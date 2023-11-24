// 定义接口: defineEventHandler
// 使用接口: useFetch('/api/channel', { method: 'get' })

import channelList from '@/database/channel'

export default defineEventHandler(event => {
  return channelList
})
