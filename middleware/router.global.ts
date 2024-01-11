import { storeToRefs } from 'pinia'
import { defineNuxtRouteMiddleware, getAccessToken, navigateTo, useUserStore } from '#imports'
// imports { useUserStore } from '@/stores'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    return true
  }
  const token: string = getAccessToken() ?? ''
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  if (to.path === '/login') {
    if (user) { navigateTo('/') }
    return true
  }
  if (!user.value || !token) {
    return await userStore.checkUser()
  }
  // if (!token && user.value === null && to.path !== '/login') {
  //   return navigateTo('/login')
  // }
  // if (to.path !== '/login') {
  //   return await userStore.checkUser()
  // }
  // if (user.value === null && to.path !== '/login') {
  //   return navigateTo('/login')
  // }
})
