<script setup lang="ts">
import { useRoute, useRouter } from '#imports'
const route = useRoute()
const router = useRouter()

const crumbsRoute = computed(() => {
  let fullPath = ''
  const routes = route.fullPath.substring(1).split('/')
  return routes
    .map((route) => {
      if (route) {
        fullPath = `${fullPath}/${route}`
        return router.resolve(fullPath)
      }
    })
    .filter(Boolean)
})
</script>

<template>
  <section>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el class="text-body1" icon="home" to="/" label="Home" />
        <q-breadcrumbs-el
          v-for="(crumb) in crumbsRoute"
          :key="crumb.name"
          :label="crumb.meta.breadcrumbs"
          :to="{ name: crumb.name }"
          class="text-body1"
        />
      </q-breadcrumbs>
    </div>
  </section>
</template>

<style scoped>

</style>
