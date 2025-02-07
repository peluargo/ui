<template>
  <v-btn>
    Send verification code
  </v-btn>
  <v-card
    class="mx-auto"
    max-width="344"
    title="Creating a new account"
  >
    <v-card-text>
      <v-text-field
        v-model="email"
        label="Email"
        placeholder="amazing.user@email.com"
        hint="Please enter YOUR email address 👀"
      />
    </v-card-text>
    
    <v-card-actions class="d-flex flex-column">
      <v-btn
        block
        color="primary"
        variant="tonal"
      >
        Send verification code
      </v-btn>
              
      <v-btn
        block
        color="primary"
        variant="text"
      >
        I already have an account
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const email = ref()
</script>