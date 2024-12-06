<template>
    <PageHeader title="Home" />

    <h2 class="text-xl">My groups</h2>

    <div class="no-groups-message">
        <p>Looks like you don't have any groups yet.</p>
        <p>How about we create a new one?</p>
    </div>

    <RouterLink to="/groups/new-group">
        <Button>Create a new group</Button>
    </RouterLink>

    <!-- <Card class="w-1/5">
        <CardHeader>
            <CardTitle>My groups</CardTitle>
        </CardHeader>
        <CardContent>
            <h2 class="text-5xl font-extrabold">56</h2>
        </CardContent>
    </Card> -->
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>