import MockAdapter from 'axios-mock-adapter'
import { api } from '#imports'
import { tickets } from '@/fake-db/tickets'

// @ts-ignore
export const getTickets = async (params = {}) => {
  const mock = new MockAdapter(api, { onNoMatch: 'passthrough' })
  mock.onGet('/api/tickets').reply(() => {
    return [200, tickets]
  })
  // @ts-ignore
  return await api.get('/api/tickets', { params }, { errorAlert: 'Login or password is incorrect' })
}

export const getTicket = async (id: number | string) => {
  const mock = new MockAdapter(api, { onNoMatch: 'passthrough' })
  mock.onGet(/\/tickets\/\w+/).reply((config) => {
    const ticketId = config?.url?.split('/').pop()
    const selectedTicket = tickets.find((ticket) => ticket.id === ticketId)
    return [200, selectedTicket]
  })

  return await api.get(`/tickets/${id}`)
}
