export type IssueUpdateLog = {
  datetime: Date
  data: {
    field: string
    from: unknown
    to: unknown
  }
  message: string
}
