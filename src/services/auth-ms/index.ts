import type { UsernameAvailabilityResponseDTO } from "@/dtos/auth-ms/accounts/username-availability-response.dto"
import { useFetch, type UseFetchReturn } from "@vueuse/core"

const baseUrl = 'http://localhost:2001/auth-ms/api'

export const AuthMS = {
  usernameIsAvailable: async (username: string): Promise<UseFetchReturn<UsernameAvailabilityResponseDTO>> => {
    return await useFetch<UsernameAvailabilityResponseDTO>(`${baseUrl}/accounts/username-availability/${username}`)
        .get()
        .json()
  },
}
