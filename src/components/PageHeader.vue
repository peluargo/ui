<template>
    <h1 class="text-3xl px-6">
        {{ props.title }}
    </h1>
</template>

<script lang="ts" setup>
    const props = defineProps<{ title: string }>()
</script>