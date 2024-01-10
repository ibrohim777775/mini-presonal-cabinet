import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios'
import { useRouter } from '#app'
import { useUserStore, useAlertsStore } from '@/stores'

// const baseURL = 'http://localhost:3000'
const baseURL = ''

const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.response.use(
  (r: AxiosResponse) => r,
  (error: AxiosError) => {
    if (error.status === 401) {
      return Promise.reject(error)
    }
  }
)

// TODO: надо поправить обработку ошибок в реальной API
instance.interceptors.response.use(
  function(response: AxiosResponse) {
    const alertsStore = useAlertsStore()
    const { addAlert } = alertsStore
    if (response.data.error) {
      response.data = { res: false, data: response.data }
      if ('errorAlert' in response.config) {
        let { errorAlert } = response.config

        if (typeof errorAlert === 'string') {
          errorAlert = { text: errorAlert }
        }
        addAlert({
          type: 'negative',
          // @ts-ignore
          text: 'Ошибка ответа от сервера ' + errorAlert?.text,
          // @ts-ignore
          timeout: errorAlert?.timeout ?? 5000
        })
        // return { data: { res: false, data: null } }
      }
    }
    // if ('errorAlert' in response.config) {
    //   response.data = { res: true, data: response.data }
    // }
    return response
  },
  (error: AxiosError) => {
    const router = useRouter
    const { setUser } = useUserStore()
    const { addAlert } = useAlertsStore()
    const config = error.response?.config

    if (error.response?.status === 401) {
      // clean user data & tokens
      setUser(null)

      router.push('/login')
      return // ?
    }

    // @ts-ignore
    if ('errorAlert' in config) {
      let { errorAlert } = config

      if (typeof errorAlert === 'string') {
        errorAlert = { text: errorAlert }
      }

      addAlert({
        // @ts-ignore
        text: 'Ошибка ответа от сервера ' + errorAlert?.text,
        type: 'negative',
        // @ts-ignore
        timeout: errorAlert?.timeout ?? 3000
      })
      return { data: { res: false, data: null } }
    }

    return Promise.reject(error)
  }
)

// export function addResponseHandler(success: (response: AxiosResponse) => AxiosResponse, error: (error: AxiosError) => AxiosError): void {
//   instance.interceptors.response.use(success, error)
// }

export default instance
