<template>
    <div
        :class="computedClass"
        class="bg-slate-50"
    >
        <div class="header">
            <p class="name">
                {{ column.name }}
            </p>
        </div>

        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ModelRef } from 'vue'
    import { WorkflowStatus } from '@/types/WorkflowStatus'

    export type KanbanBoardColumnType = {
        id: string
        name: string
        status: WorkflowStatus
    }

    const column: ModelRef<KanbanBoardColumnType> = defineModel<KanbanBoardColumnType>('column', {
        required: true,
    })

    const computedClass = computed(() => {
        const classList: string[] = ['kanban-board-column']

        return classList.join(' ')
    })
</script>

<style scoped lang="pcss">
    .kanban-board-column {
        min-width: 280px;
        max-width: 100%;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0;

        border-radius: 8px;

        .header {
            padding: 16px;
            
            .name {
                @apply text-slate-800 font-medium m-0 uppercase text-ellipsis block whitespace-nowrap overflow-hidden;
            }
        }

        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 24px;

            padding: 16px;

            list-style: none;
        }
    }
</style>