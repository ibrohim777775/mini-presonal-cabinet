<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>
<script setup lang="ts">
import { NuxtLayout, NuxtPage } from '#components'
</script>
