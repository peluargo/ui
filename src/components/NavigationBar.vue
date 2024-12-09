<template>
    <nav class="w-full h-20 fixed bg-indigo-400 dark:bg-transparent border-b">
        <div class="container h-full flex flex-row items-center justify-between gap-4">
            <NavigationBarLogo />

            <div class="flex-grow" />

            <NavigationBarThemeButton />

            <NavigationBarUserButton />
        </div>
    </nav>
</template>

<script lang="ts" setup>
    import NavigationBarLogo from '@/components/NavigationBarLogo.vue'
    import NavigationBarUserButton from '@/components/NavigationBarUserButton.vue'
    import NavigationBarThemeButton from '@/components/NavigationBarThemeButton.vue';
</script>