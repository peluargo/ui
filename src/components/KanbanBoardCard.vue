<template>
    <div
        :class="computedClass"
        :style="computedStyle"
    >
        <p class="summary">
            {{ card.summary }}
        </p>
    </div>
</template>

<script setup lang="ts">
    import { Issue } from '@/types/issue'
    import { computed } from 'vue'

    export type KanbanBoardCardType = Issue

    const card = defineModel<KanbanBoardCardType>('card', { required: true })

    const computedClass = computed(() => {
        const classList: string[] = ['kanban-card']

        classList.push(`--${card.value.type.name.replace('_', '-').toLowerCase()}`)

        return classList.join(' ')
    })

    const computedStyle = computed(() => {
        const styleList: string[] = []

        styleList.push(`border-color: ${card.value.type.style.backgroundColor};`)

        return styleList.join(' ')
    })
</script>

<style scoped lang="scss">
    .kanban-card {
        width: 100%;
        height: 156px;

        padding: 8px;
        margin: 0px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;

        border-style: solid;
        border-width: 0 0 0 4px;
        border-radius: 4px;

        @apply bg-slate-100 text-slate-800;
    }
</style>

