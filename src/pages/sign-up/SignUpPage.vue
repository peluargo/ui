<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
        <Card class="w-[500px]">
            <CardHeader>
                <CardTitle>Creating your account</CardTitle>

                <CardDescription>We first need to verify your email account</CardDescription>
            </CardHeader>

            <CardContent>
                <form @submit="onSubmit">
                    <FormField
                        v-slot="{ componentField }"
                        name="email"
                    >
                        <FormItem>
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="your.email@example.com"
                                    v-bind="componentField"
                                />
                            </FormControl>

                            <FormDescription>
                                This is your public display name.
                            </FormDescription>

                            <FormMessage />
                        </FormItem>
                    </FormField>
                </form>

                <RouterLink to="/sign-in">
                    <Button
                        variant="link"
                        class="px-0"
                    >
                        I already have an account
                    </Button>
                </RouterLink>
            </CardContent>

            <CardFooter class="flex justify-end px-6 pb-6">
                <Button>
                    Continue
                </Button>
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
