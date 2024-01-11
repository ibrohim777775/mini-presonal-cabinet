import { defineStore } from 'pinia'
import { ref, useRouter } from '#imports'
import type { IUser } from '#types'
import { setTokens, getAccessToken, cleanTokensData } from '@/utils/tokens'
import { login as loginApi, check } from '@/api/auth'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<IUser | null>(null)
  const router = useRouter()

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

  const signOut = () => {
    setUser(null)
    cleanTokensData()
    if (router.path !== '/login') {
      router.push('/login')
    }
  }

  const checkUser = async () => {
    // @ts-ignore
    const token: string = getAccessToken()
    const { status, data } = await check(token)
    if (token && data) {
      setUser(data)
      // router.push('/')
    } else {
      signOut()
    }
    // return { status, data }
  }

  return { user, setUser, login, checkUser, signOut }
})
