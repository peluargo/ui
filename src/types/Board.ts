import { Issue } from './issue'
import { Sprint } from './sprint'
import type { WorkflowStatus } from './WorkflowStatus'

export type Board = {
  id: string
  name: string
  columns: WorkflowStatus[]
  cards: Issue[]
  sprint?: Sprint
  members?: []
}
