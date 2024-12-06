<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Avatar class="border-2 drop-shadow-md cursor-pointer">
                <AvatarImage src="https://avatars.githubusercontent.com/u/50812580?v=4" alt="@radix-vue" />
                <AvatarFallback>PG</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent class="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            
            <DropdownMenuSeparator />
        
            <DropdownMenuItem>
                <span>GitHub</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
                <span>Support</span>
            </DropdownMenuItem>

            <DropdownMenuItem disabled>
                <span>API</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
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
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RouterLink } from 'vue-router'
</script>