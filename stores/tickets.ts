import { defineStore } from 'pinia'
import { ref } from '#imports'
import { getTickets } from '@/api/tickets'

export const useTicketsStore = defineStore('ticketStore', () => {
  const tickets = ref([])

  const setTickets = (data: any) => {
    tickets.value = data
  }

  const getTicketsData = async (params = {}) => {
    const { status, data } = await getTickets(params)
    if (status === 200) {
      setTickets(data)
    }
  }
  return { tickets, getTicketsData }
})
