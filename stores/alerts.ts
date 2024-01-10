import { defineStore } from 'pinia'
import { ref } from '#imports'

interface IMessage {
  id: number
  text: string,
  timeout?: number
  type?: 'positive' | 'negative' | 'warning' | 'info'
}

export const useAlertsStore = defineStore('alertsStore', () => {
  const messages = ref<IMessage[]>([])
  const lastId = ref(0)

  const removeAlert = (id: number) => {
    // @ts-ignore
    messages.value = messages.value.filter(m => m.id !== id)
  }

  const addAlert = (message: IMessage) => {
    const id = ++lastId.value
    messages.value.push({ ...message, id })
    setTimeout(() => {
      removeAlert(id)
    }, message.timeout ?? 3000)
  }

  return { messages, addAlert, removeAlert }
})
