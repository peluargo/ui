import type { AuthRequestDTO } from "@/dtos/auth-request.dto";
import { useFetch } from "@vueuse/core"

const baseUrl = 'http://localhost:2001/auth-ms/api'

export const AuthMS = {
    authenticate: async (authRequestDTO: AuthRequestDTO) => {
        try {
            const { data, error, isFetching } = await useFetch(`${baseUrl}/accounts/authenticate`)
                .post(authRequestDTO)
                .json()

            return { data, error, isFetching }
        } catch (error) {
            console.error(error)
        }
    },

    usernameAvailability: async (username: string) => {
        try {
            const { data } = await useFetch(`${baseUrl}/accounts/username-availability/${username}`)
                .get()
                .json()

            return { data }
        } catch (error) {
            console.error(error)
        }
    },
}