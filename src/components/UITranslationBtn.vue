<template>
  <v-tooltip
    :text="$t('shared.language')"
    location="top"
  >
    <template #activator="{ props: menu }">
      <v-menu>
        <template #activator="{ props: tooltip }">
          <v-btn
            icon="mdi-translate"
            v-bind="mergeProps(tooltip, menu)"
          />
        </template>
        <v-list
          active-strategy="single-leaf"
          lines="one"
          nav
          :items="items"
          density="compact"
        >
          <v-list-subheader>{{ $t('shared.language') }}</v-list-subheader>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :title="item.title"
            :value="item.value"
            @click="locale = item.value"
          />
        </v-list>
      </v-menu>
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { mergeProps } from 'vue'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()


const items = ref([
  { title: 'English', value: 'en' },
  { title: 'Português', value: 'pt-BR' }
])
</script>