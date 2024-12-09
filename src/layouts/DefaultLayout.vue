<template>
    <NavigationBar />

    <main class="container pt-32">
        <RouterView />
    </main>
</template>

<script lang="ts" setup>
    import NavigationBar from '@/components/NavigationBar.vue'
</script>

