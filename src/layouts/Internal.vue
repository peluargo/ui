<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="sym_r_menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ appName }}
        </q-toolbar-title>

        <q-btn dense flat round :icon="darkThemeActive ? 'sym_r_light_mode' : 'sym_r_dark_mode'" @click="toggleDarkTheme" />
        <q-btn dense flat round @click="toggleRightDrawer">
          <q-avatar size="28px">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQHGbsYum_F4FA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732818959850?e=1745452800&v=beta&t=-A1vixffVGCQY5WioZu21DRR5EHnwagRNo2Oz98076c">
          </q-avatar>
        </q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const appName = ref('Peluargo')

const rightDrawerOpen = ref(false)
function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const $q = useQuasar()
const darkThemeActive = ref($q.dark.isActive)
function toggleDarkTheme () {
  darkThemeActive.value = !darkThemeActive.value
  $q.dark.set(darkThemeActive.value)
}
</script>
