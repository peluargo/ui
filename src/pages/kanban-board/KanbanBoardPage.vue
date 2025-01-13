<template>
    <PageHeader title="My Board" />

    <KanbanBoard v-model:board="board" />
</template>

<script setup lang="ts">
    import KanbanBoard from '@/components/KanbanBoard.vue'
    import PageHeader from '@/components/PageHeader.vue'
    import { KanbanBoardService } from '@/mocks/services/KanbanBoardSservice'
    import { ref } from 'vue'

    const board = ref(KanbanBoardService.getOne())
</script>