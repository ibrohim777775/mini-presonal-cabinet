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
          <h1 class="title">
            Webtronics mini admin panel
          </h1>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped>
.title{
  font-size: 3rem;
  font-weight: 500;
}
</style>
