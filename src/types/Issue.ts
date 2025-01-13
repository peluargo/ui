import type { WorkflowStatus } from './WorkflowStatus'
import type { IssueType } from './IssueType'
import type { IssueUpdateLog } from './IssueUpdateLog'

export type Issue = {
  id: string
  summary: string
  type: IssueType
  status: WorkflowStatus
  description?: string
  tags?: []
  logs?: IssueUpdateLog[]
}
