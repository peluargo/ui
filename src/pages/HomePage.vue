<template>
    <PageHeader title="Home" />

    <div class="flex flex-row items-center justify-start gap-4 mt-12">
        <Card class="w-[200px]">
            <RouterLink to="/users">
                <CardContent>
                    <p>Users</p>
                </CardContent>
            </RouterLink>
        </Card>
        
        <Card class="w-[200px]">
            <RouterLink to="/groups">
                <CardContent>
                    <p>Groups</p>
                </CardContent>
            </RouterLink>
        </Card>
        
        <Card class="w-[200px]">
            <RouterLink to="/kanban-board">
                <CardContent>
                    <p>Kanban</p>
                </CardContent>
            </RouterLink>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import PageHeader from '@/components/PageHeader.vue'
    import { RouterLink } from 'vue-router'
    import { Card, CardContent } from '@/components/ui/card';
</script>
