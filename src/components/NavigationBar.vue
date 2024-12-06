<template>
    <nav class="w-full h-20 fixed bg-indigo-400">
        <div class="container h-full flex flex-row items-center justify-between bg-indigo-400">
            <NavigationBarLogo />
            <NavigationBarUserButton />
        </div>
    </nav>
</template>

<script lang="ts" setup>
import NavigationBarLogo from '@/components/NavigationBarLogo.vue'
import NavigationBarUserButton from '@/components/NavigationBarUserButton.vue'
import { RouterLink } from 'vue-router'
</script>