<template>
  <v-container class="h-100 d-flex flex-column justify-center">
    <v-card
      class="mx-auto"
      width="312"
      :title="$t('sign-up.index.title')"
    >
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="email"
            :label="$t('sign-up.index.fields.email.label')"
            :placeholder="$t('sign-up.index.fields.email.placeholder')"
            :hint="$t('sign-up.index.fields.email.hint')"
            :loading="validating"
            persistent-hint
            clearable
            :rules="[validations.isAvailable]"
          />
        </v-form>
      </v-card-text>
    
      <v-card-actions class="d-flex flex-column">
        <v-btn
          block
          variant="elevated"
          :text="$t('sign-up.index.buttons.submit.label')"
          @click="checkUsernameAvailability"
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
import { debounce, isEmpty } from 'lodash'

const email = ref('john.doe@example.com')
const validating = ref(false)
const timeout: number = 0

const checkUsernameAvailability = (email: string) => {
  if (isEmpty(email)) return false;

  validating.value = true

  let isAvailable = false

  debounce(async () => {
    const { data } = await API.AuthMS.usernameAvailability(email!);

    validating.value = false

    isAvailable = data.isAvailable
  }, 1500)

  return isAvailable
}

const validations = ref({
  isRequired: (val: string) => !!val || 'This field is required',
  isAvailable: (val: string) => checkUsernameAvailability(val) || 'This email is not available',
})


</script>