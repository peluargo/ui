import type { ApiResponseDTO } from "@/dtos/shared/api-response.dto"

export type UsernameAvailabilityResponseDTO = ApiResponseDTO<{
  isAvailable: boolean
}>
