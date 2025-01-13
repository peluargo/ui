import { Issue } from "./issue"

export type Sprint = {
  id: string
  name: string
  goal?: string
  issues: Issue[]
}
