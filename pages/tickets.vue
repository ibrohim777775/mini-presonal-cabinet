<script setup>
import { definePageMeta, useHead } from '#imports'
import { TicketsList } from '#components'

definePageMeta({
  name: 'aboutUs',
  breadcrumbs: 'Tickets'
})

useHead({
  title: 'Tickets | Webtronics'
})
</script>

<template>
  <h1 class="tickets__title">Tickets table</h1>
  <tickets-list />
</template>

<style scoped>
.tickets__title{
  font-size: 2rem;
  font-weight: 500;
  line-height: 125%;
}
</style>
