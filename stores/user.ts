import { defineStore } from 'pinia'
import { ref } from '#imports'
import type { IUser } from '#types'
import { setTokens, getAccessToken } from '@/utils/tokens'
import { login as loginApi, check } from '@/api/auth'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<IUser | null>(null)

  const setUser = (newUser: IUser | null) => {
    user.value = newUser
  }

  const login = async (login: string, password: string) => {
    const { status, data } = await loginApi(login, password)
    if (data.user) {
      setUser(data.user)
      setTokens(data.access_token)
    }
    return { status, data }
  }

  const checkUser = async () => {
    // @ts-ignore
    const token: string = getAccessToken()
    const { status, data } = await check(token)
    if (data.user) {
      setUser(data.user)
    }
    return { status, data }
  }
  return { user, setUser, login, checkUser }
})
