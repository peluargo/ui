<template>
    <div :class="computedClass">
        <div class="header">
            Board Header
        </div>

        <div class="content">
            <KanbanBoardColumn
                v-for="(column, columnIndex) in board.columns"
                :key="column.id"
                v-model:column="board.columns[columnIndex]"
            >
                <KanbanBoardCard 
                    v-for="(card, cardIndex) in getCards(board.columns[columnIndex].status)"
                    :key="card.id"
                    v-model:card="board.cards[cardIndex]"
                />
            </KanbanBoardColumn>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ModelRef } from 'vue';
    import KanbanBoardColumn, { type KanbanBoardColumnType } from './KanbanBoardColumn.vue'
    import KanbanBoardCard, { KanbanBoardCardType } from './KanbanBoardCard.vue'
    import { WorkflowStatus } from '@/types/WorkflowStatus';
    import { Issue } from '@/types/issue';

    export type KanbanBoardType = {
        id: string
        name: string
        columns: KanbanBoardColumnType[]
        cards: KanbanBoardCardType[]
        members?: []
    }

    const board: ModelRef<KanbanBoardType> = defineModel<KanbanBoardType>('board', { required: true })

    const computedClass = computed(() => {
        const classList: string[] = ['kanban-board']

        return classList.join(' ')
    })

    const getCards = (status: WorkflowStatus) => {
        return board.value.cards.filter((card: Issue) => {
            return card.status.id === status.id
        })
    }
</script>

<style scoped lang="scss">
    .kanban-board {
        width: 100%;
        height: calc(100% - 36px);

        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 24px;

        .header {
            padding: 0 24px;
        }

        .content {
            max-width: 100%;

            padding: 24px;

            flex: 1 1 auto;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            justify-content: flex-start;
            gap: 24px;

            overflow-x: auto;

            list-style: none;
        }
    }
</style>