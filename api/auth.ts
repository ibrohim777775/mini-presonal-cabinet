import MockAdapter from 'axios-mock-adapter'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { api } from '#imports'
import { users } from '@/fake-db/users'

export const login = async (login: string, password: string) => {
  const mock = new MockAdapter(api, { onNoMatch: 'passthrough' })

  mock.onPost('/api/auth').reply(config => {
    const data = JSON.parse(config.data)
    const { login, password } = data
    const user = _.cloneDeep(users.find(u => u.login === login && u.password === password))

    const error = []

    if (!user) {
      error.push('Login or password is incorrect')
    }

    if (error.length === 0 && user) {
      // @ts-ignore
      delete user.password

      // eslint-disable-next-line camelcase
      const access_token = uuidv4()
      const response = {
        user,
        // eslint-disable-next-line camelcase
        access_token
      }
      return [200, response]
    } else {
      const res = [200, { error }]
      return res
    }
  })
  // @ts-ignore
  const { data, status } = await api.post('/api/auth', { login, password }, { errorAlert: 'Login or password is incorrect' })
  // TODO: add token to localStorage or store
  return { status, data }
}

export const check = async (token: string) => {
  const mock = new MockAdapter(api, { onNoMatch: 'passthrough' })

  // @ts-ignore
  mock.onPost('/api/auth/check').reply(config => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = JSON.parse(config.data)
    const user = users[0]
    // @ts-ignore
    delete user?.password
    return [200, user]
  })

  const { data, status } = await api.post('/api/auth/check', { token })
  return { status, data }
}
