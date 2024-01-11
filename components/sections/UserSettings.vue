<template>
  <div class="user-settings full-width">
    <q-form class="full-height">
      <div class="background-photo">
        <div v-if="true" class="default-background">
          <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 200px;" @click="console.log('1')"></q-img>
        </div>
      </div>
      <div class="profile-photo text-center" @click="console.log('1')">
        <div v-if="!user?.photo" class="default-user-image column items-center">
          <q-avatar
            class="q-mb-sm"
            round="round"
            color="blue-grey-10"
            icon="person"
            font-size="110px"
            size="180px"
            text-color="white"
          >
          </q-avatar><span class="text-caption text-blue-grey-10">Click to edit</span>
        </div>
        <div v-else class="user-image column items-center">
          <q-avatar class="q-mb-sm shadow-5" size="180px">
            <q-img :src="user.photo"></q-img>
            <!-- TODO: надо сделать редактирование аватара            -->
            <!--          </q-avatar><span class="text-blue-grey-10"><q-icon class="q-mr-sm" color="blue-grey-10" name="edit" size="16px"></q-icon>Click to edit</span>-->
          </q-avatar>
        </div>
      </div>
      <section class="user-info">
        <h6 class="q-mt-none q-mb-md text-center">Edit Your Profile</h6>
        <div class="row justify-between items-center q-mb-lg">
          <label class="col-3" for="fullName">Name</label>
          <q-input
            id="fullName"
            v-model="user.name"
            class="col bg-white q-pl-md"
            borderless="borderless"
            dense="dense"
            type="text"
          ></q-input>
        </div>
        <div class="row justify-between items-center q-mb-lg">
          <label class="col-3" for="email">Email</label>
          <q-input
            id="email"
            v-model="user.email"
            class="col bg-white q-pl-md"
            borderless="borderless"
            dense="dense"
            type="text"
          ></q-input>
        </div>
        <div class="row justify-between items-center q-mb-lg">
          <label class="col-3" for="birthday">Birthday</label>
          <q-input
            v-model="user.birthday"
            class="col bg-white q-pl-md"
            style="max-height: 40px"
            borderless="borderless"
            dense="dense"
          >
            <template #append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="user.birthday" minimal mask="DD.MM.YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row justify-between items-center q-mb-lg">
          <label class="col-3" for="mobile">Mobile</label>
          <q-input
            id="phone"
            v-model="user.phone"
            class="col bg-white q-pl-md"
            borderless="borderless"
            dense="dense"
            mask="+###(##) ###-####"
            type="text"
          ></q-input>
        </div>
      </section>
      <div class="row justify-between q-my-lg q-px-md absolute-bottom">
        <q-btn color="primary" label="CANCEL" style="min-width:6em;" @click="$emit('setEditUserDialog')"></q-btn>
        <q-btn color="primary" type="button" label="SAVE" style="min-width:6em;" @click.prevent="submitHandler"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useUserStore, useAlertsStore } from '#imports'

const emit = defineEmits(['setEditUserDialog'])

const userStore = useUserStore()
const { user } = userStore

const alertStore = useAlertsStore()
const { addAlert } = alertStore

const submitHandler = () => {
  emit('setEditUserDialog')
  addAlert({
    text: 'All changes are saved',
    type: 'positive'
  })
}
</script>
<style scoped>
.user-settings {
  background-color: #e4e4e4;
}

.default-user-image {
  cursor: pointer;
  color: white;
}

@media (max-width: $breakpoint-sm) {
  .user-settings {
    margin-bottom: 2em;
  }

  .default-user-image .q-icon {
    font-size: 1em !important;
  }
}

.profile-photo {
  cursor: pointer;
  margin: -6em 0 2em;
}

.profile-photo .q-avatar {
  @media (max-width: $breakpoint-sm) {
    margin-top: 1rem;
    height: .75em;
    width: .75em;
  }
}

.profile-photo .user-image .edit {
  top: 2.5em;
}

.user-info {
  max-width: 20.5em;
  margin: auto;
  color: $blue-grey-10;
}

.user-info label {
  text-align: left;
  font-weight: bold;
}

.user-info input {
  background: rgba(101, 104, 110, 0.20);
  border-radius: 6px;
  color: $blue-grety-10;
  font-weight: bold;
  padding: .5em;
}

</style>
