export type ApiResponseMessageDTO = {
  type: 'INFORMATION' | 'WARNING' | 'ERROR'
  code: string
  content: string
}
