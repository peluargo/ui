<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Avatar class="border-2 drop-shadow-md cursor-pointer">
                <AvatarImage
                    src="https://avatars.githubusercontent.com/u/50812580?v=4"
                    alt="@radix-vue"
                />

                <AvatarFallback>PG</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent class="w-56">
            <RouterLink :to="{ name: 'user-profile', params: { id: '456' } }">
                <DropdownMenuItem class="cursor-pointer">
                    <span>My Profile</span>
                </DropdownMenuItem>
            </RouterLink>

            <DropdownMenuSeparator />

            <RouterLink to="/sign-in">
                <DropdownMenuItem class="cursor-pointer">
                    <span>Logout</span>
                </DropdownMenuItem>
            </RouterLink>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script lang="ts" setup>
    import {
        Avatar,
        AvatarFallback,
        AvatarImage
    } from '@/components/ui/avatar'
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu'
    import { RouterLink } from 'vue-router'
</script>
