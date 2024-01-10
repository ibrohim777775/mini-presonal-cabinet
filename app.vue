<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
      <ErrorNotification />
    </NuxtLayout>
  </ClientOnly>
</template>
<script setup lang="ts">
import { NuxtLayout, NuxtPage, ErrorNotification } from '#components'
</script>
