<script setup lang="ts">
import { leftSidebarItems } from '@/constants/leftSidebarItems'
</script>

<template>
  <nav>
    <q-list padding class="menu-list">
      <q-item v-for="item in leftSidebarItems" key="item.text" v-ripple :to="item.path" clickable>
        <q-item-section avatar class="sidebar__avatar">
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
          {{ item.text }}
        </q-item-section>
      </q-item>
    </q-list>
  </nav>
</template>

<style scoped>
.sidebar__avatar{
  min-width: auto;
}
</style>
