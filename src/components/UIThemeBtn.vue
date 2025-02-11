<template>
  <v-tooltip
    :text="$t('shared.theme')"
    location="top"
  >
    <template #activator="{ props }">
      <v-btn
        icon="mdi-theme-light-dark"
        v-bind="props"
        @click="toggleTheme"
      />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>