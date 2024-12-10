<template>
    <PageHeader title="Dashboard" />

    <Card class="w-1/5">
        <CardContent>
            <p>
                Welcome to Peluargo!
            </p>
        </CardContent>
    </Card>

    <RouterLink to="/groups/new-group">
        <Button>Create a new group</Button>
    </RouterLink>
</template>

<script setup lang="ts">
    import PageHeader from '@/components/PageHeader.vue'
    import { RouterLink } from 'vue-router'
    import { Button } from '@/components/ui/button'
    import Card from '@/components/ui/card/Card.vue';
    import CardContent from '@/components/ui/card/CardContent.vue';
</script>
