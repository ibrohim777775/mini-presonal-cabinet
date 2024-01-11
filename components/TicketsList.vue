<script setup>
import { onBeforeMount } from '#imports'
import { useTicketsStore } from '@/stores'

const ticketsStore = useTicketsStore()
const { tickets } = storeToRefs(ticketsStore)
onBeforeMount(() => {
  ticketsStore.getTicketsData()
})

const columns = [
  { name: 'author', label: 'Author', align: 'left', field: 'author', sortable: true },
  { name: 'title', label: 'Title', align: 'left', field: 'title' },
  { name: 'message', label: 'Description', align: 'left', field: 'message' },
  { name: 'creationDate', label: 'Created', align: 'left', field: 'creationDate', sortable: true }
  // ... и так далее
]
</script>

<template>
  <section>
    <q-table :rows="tickets" :columns="columns">
      <template #body-cell="props">
        <q-td :props="props">
          <nuxt-link to="/tickets" class="table__item-link">
            {{ props.value }}
          </nuxt-link>
        </q-td>
      </template>
      <template #body-cell-author="props">
        <q-td :props="props">
          <nuxt-link :to="{ name: 'profile', params: { id: props.row.author } }">
            {{ props.row.author }}
          </nuxt-link>
        </q-td>
      </template>
    </q-table>
  </section>
</template>

<style scoped>
.table__item-link{
  text-decoration: none;
  color: #000;
}
.table__item-link:hover {
  text-decoration: 1px solid blue underline;
}
</style>
