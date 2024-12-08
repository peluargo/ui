<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">

        <Card class="w-[500px]">
            <CardHeader>
                <CardTitle>Welcome!</CardTitle>
                <CardDescription>Please, sign in if you already have an account</CardDescription>
            </CardHeader>

            <CardContent>
                <form @submit="onSubmit" class="flex flex-col gap-y-8">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <Input type="text" placeholder="your.email@example.com" v-bind="componentField" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>

                            <FormControl>
                                <Input type="text" v-bind="componentField" />
                            </FormControl>

                            <RouterLink to="/sign-in/email-confirmation">
                                <Button variant="link" class="px-0">
                                    I forgot my password
                                </Button>
                            </RouterLink>

                            <FormMessage />
                        </FormItem>
                    </FormField>
                </form>
            </CardContent>

            <CardFooter class="flex flex-col">
                <RouterLink to="/">
                    <Button>
                        Sign in
                    </Button>
                </RouterLink>

                <Separator label="Or"  class="my-8"/>

                <RouterLink to="/sign-up">
                    <Button variant="outline">
                        Create an account
                    </Button>
                </RouterLink>
            </CardFooter>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { RouterLink } from 'vue-router'
import Separator from '@/components/ui/separator/Separator.vue'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>
