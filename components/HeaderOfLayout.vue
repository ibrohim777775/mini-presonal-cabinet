<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const { user, signOut } = userStore

const signOutHandler = () => {
  signOut()
}
defineProps({
  toggleLeftDrawer: Function
})
</script>

<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        Admin dashboard
      </q-toolbar-title>
      <q-chip clickable>
        <q-avatar>
          <q-icon v-if="user?.photo === null" name="person" />
          <img v-else :src="user?.photo" alt="User avatar" />
        </q-avatar>
        {{ user?.name }}
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section to="/profile">Profile</q-item-section>
            </q-item>
            <q-item clickable @click="signOutHandler">
              <q-item-section>Exit</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-chip>
    </q-toolbar>
  </q-header>
</template>

<style scoped>

</style>
