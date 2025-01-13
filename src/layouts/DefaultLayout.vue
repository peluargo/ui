<template>
    <NavigationBar />

    <main class="pt-32 h-screen">
        <RouterView />
    </main>
</template>

<script lang="ts" setup>
    import NavigationBar from '@/components/NavigationBar.vue'
</script>

