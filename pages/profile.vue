<template>
  <section>
    <div class="background-photo">
      <div class="default-background">
        <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 200px;"></q-img>
      </div>
      <!--      <div v-else class="user-background">-->
      <!--        <q-img :src="currentUser?.backgroundPhoto" style="height: 200px;"></q-img>-->
      <!--      </div>-->
    </div>
    <div class="profile-container">
      <div class="profile-photo text-center">
        <div class="default-user-image">
          <q-avatar
            round="round"
            font-size="100px"
            size="120px"
            text-color="white"
          >
            <q-img :src="user?.photo" />
          </q-avatar>
        </div>
        <!--        <div v-else class="user-image column items-center">-->
        <!--          <q-avatar class="q-mb-sm shadow-5" size="140px">-->
        <!--            <q-img :src="currentUser.profilePhoto"></q-img>-->
        <!--          </q-avatar>-->
        <!--        </div>-->
      </div>
      <div class="text-weight-bold text-h6">{{ user.name }}</div>
      <div class="user-info q-mt-lg">
        <div class="row justify-between">
          <label class="text-h6 text-body1">Email:</label>
          <p class="text-h6 text-body1 ">{{ user?.email }}</p>
        </div>
        <div class="row justify-between">
          <label class="text-body1 text-left">Mobile Number:</label>
          <p class="text-body1 text-right">{{ user?.phone }}</p>
        </div>
        <div class="row justify-between">
          <label class="text-body1 text-left">Birthday:</label>
          <p class="text-body1 text-right">{{ user?.birthday }}</p>
        </div>
        <div class="row justify-between">
          <label class="text-body1 text-left">Address:</label>
          <p class="text-body1 text-right">{{ user?.address }}</p>
        </div>
      </div>
    </div>
    <q-btn class="fixed-bottom-right q-ma-md" round="round" color="primary" icon="edit" @click="setEditUserDialog"></q-btn>
    <q-dialog v-model="editUserDialog" full-height="full-height" persistent="persistent">
      <sections-user-settings @set-edit-user-dialog="setEditUserDialog" />
    </q-dialog>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore, ref } from '#imports'
import { SectionsUserSettings } from '#components'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const editUserDialog = ref(false)
const setEditUserDialog = () => {
  editUserDialog.value = !editUserDialog.value
}

definePageMeta({
  name: 'profile',
  breadcrumbs: 'Profile'
})

useHead({
  title: 'Profile | Webtronics'
})
</script>
<style>
.background-photo {
  //cursor: pointer;
}
.profile-container {
  position: relative;
  text-align: center;
  //background: #f1f1f1;
  top: -4.6rem;
}
.user-info {
  margin: 2em auto;
  max-width: 24em;
  position: relative;
}
</style>
