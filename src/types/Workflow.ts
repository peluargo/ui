import type { IssueType } from './IssueType'
import type { WorkflowStatus } from './WorkflowStatus'

export type Workflow = {
  id: string
  name: string
  statuses: WorkflowStatus[]
  issueTypes: IssueType[]
}
