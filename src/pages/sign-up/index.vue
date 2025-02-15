<template>
  <v-container class="h-100 d-flex flex-column justify-center">
    <v-card
      class="mx-auto"
      width="312"
      :title="$t('sign-up.index.title')"
    >
      <v-card-text>
        <v-text-field
          ref="email"
          autofocus
          persistent-hint
          validate-on="lazy"
          :color="formIsValid ? 'success' : 'error'"
          :base-color="formIsValid ? 'success' : 'error'"
          :label="$t('sign-up.index.fields.email.label')"
          :placeholder="$t('sign-up.index.fields.email.placeholder')"
          :hint="$t('sign-up.index.fields.email.hint')"
          :loading="validating"
          :rules="[validations.mustBeFilled, validations.mustBeEmail]"
        >
          <template #append-inner>
            <v-icon
              :icon="formIsValid ? 'mdi-check' : 'mdi-close'"
              :color="formIsValid ? 'success' : 'error'"
            />
          </template>
        </v-text-field>
      </v-card-text>

      <v-card-actions class="d-flex flex-column">
        <v-btn
          block
          variant="elevated"
          :text="$t('sign-up.index.buttons.submit.label')"
          :disabled="!formIsValid"
          :loading="validating"
          @click="submit"
        />

        <v-btn
          block
          variant="text"
          :text="$t('sign-up.index.buttons.cancel.label')"
        />
      </v-card-actions>
    </v-card>

    <div
      class="mx-auto d-flex flex-row justify-end mt-4"
      style="width: 312px;"
    >
      <UIThemeBtn />
      <UITranslationBtn />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { API } from '@/services'
// import { useI18n } from "vue-i18n"
import { validations } from '@/composables/validation'
import { isEmpty } from 'lodash'

// const { t } = useI18n({ useScope: "global" })

const email = useTemplateRef('email')
const validating = ref(false)
const formIsValid = ref(false)

async function submit () {
  if (isEmpty(email.value)) throw new Error('Email field is invalid')

  const { data, statusCode } = await API.AuthMS.usernameIsAvailable(String(email.value))

  if (statusCode.value !== 200) {
    return console.error(data.value);
  }

  alert(data.value?.content.isAvailable);
}
</script>
