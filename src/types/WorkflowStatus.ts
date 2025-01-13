import type { WorkflowStatusCategory } from './WorkflowStatusCategory'

export type WorkflowStatus = {
  id: string
  name: string
  description?: string
  category: WorkflowStatusCategory
}
