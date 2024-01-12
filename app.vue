<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
      <ErrorNotification />
    </NuxtLayout>
  </ClientOnly>
</template>
<script setup>
import { NuxtLayout, NuxtPage, ErrorNotification } from '#components'

useHead({
  meta: [
    { name: 'description', content: 'Webtronics - mini admin panel' },
    { name: 'author', content: 'Ibrohim Bobojonov https://t.me/ibrohimbobojonov' }
  ]
})
</script>
