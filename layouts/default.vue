<script setup>
import { ref } from '#imports'
import { HeaderOfLayout, ShowBreadcrumbs, LeftSidebar } from '#components'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="hHh lpR fFf">
    <header-of-layout :toggle-left-drawer="toggleLeftDrawer" />
    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <!-- drawer content -->
      <left-sidebar />
    </q-drawer>

    <q-page-container>
      <show-breadcrumbs />
      <slot />
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>
