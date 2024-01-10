<script setup lang="ts">
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { watch } from '#imports'
import { useAlertsStore } from '@/stores'

const alertStore = useAlertsStore()
const { messages } = storeToRefs(alertStore)

const $q = useQuasar()

watch(() => alertStore.messages.length, () => {
  if (messages.value.length > 0) {
    messages.value.forEach(message => {
      $q.notify({
        message: message.text,
        type: message.type,
        position: 'bottom-right',
        timeout: message.timeout
      })
      alertStore.removeAlert(message.id)
    })
  }
})
</script>

<template>
  {{ messages }}
</template>

<style scoped>

</style>
