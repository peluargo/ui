import type { ApiResponseMessageDTO } from "./api-response-message.dto"

export type ApiResponseDTO<T> = {
  timestamp: Date
  messages: ApiResponseMessageDTO[]
  content: T
}
