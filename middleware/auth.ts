export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated()是一个验证用户是否已经认证的示例方法
  function isAuthenticated() {
    return false
  }
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
})
