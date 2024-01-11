<script setup>
import { QLayout, QPageContainer, QPage } from 'quasar'
import { useHead } from '#imports'

useHead({
  title: 'Home | Webtronics'
})
</script>

<template>
  <div>
    <q-layout>
      <q-page-container>
        <q-page>
          <h1>
            Hello nuxt
          </h1>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped>

</style>
