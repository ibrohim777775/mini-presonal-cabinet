<script setup lang="ts">
import { ref } from 'vue'
import { QLayout, QPageContainer, QPage } from 'quasar'

const login = ref(null)
const loginRef = ref(null)
const password = ref(null)
const passwordRef = ref(null)
const error = ref(false)

function loginHandler() {
  loginRef.value.validate()
  passwordRef.value.validate()

  if (loginRef.value.hasError || passwordRef.value.hasError) {
    error.value = true
  } else {
    console.log(login.value, password.value)
  }
}
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-grey-2 window-height window-width row justify-center items-center">
        <div class="column col col-sm-6 col-md-4 q-mx-md">
          <div class="row full-width">
            <h5 class="text-h5 text-dark text-weight-bold text-center full-width q-my-md">Webtronics</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1 full-width">
              <q-card-section>
                <q-form class="q-gutter-md" @submit.prevent.stop="loginHandler">
                  <q-input
                    ref="loginRef"
                    v-model="login"
                    square
                    filled
                    clearable
                    :error="error"
                    type="text"
                    label="Login"
                    lazy-rules
                    :rules="[ val => (val && val.length > 3) || 'Please type something']"
                  />
                  <q-input
                    ref="passwordRef"
                    v-model="password"
                    square
                    filled
                    clearable
                    :error="error"
                    error-message="Login or password is incorrect"
                    type="password"
                    label="Password"
                    lazy-rules
                    :rules="[val => (val && val.length > 4) || 'Password is too short']"
                  />
                  <q-card-actions class="q-ml-md q-pa-none">
                    <q-btn
                      unelevated
                      color="light-green-7"
                      type="submit"
                      size="lg"
                      class="full-width"
                      label="Login"
                    />
                  </q-card-actions>
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>
