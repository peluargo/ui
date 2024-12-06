<template>
    <h1 class="text-3xl">{{ props.title }}</h1>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: string }>()
</script>