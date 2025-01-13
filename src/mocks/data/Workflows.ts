import type { Workflow } from '@/types/workflow'
import {
  BACKLOG,
  IN_IMPLEMENTATION_DEVELOPMENT,
  IMPLEMENTATION_DONE,
  IN_IMPLEMENTATION_REVIEW,
  IN_IMPLEMENTATION_TEST,
  READY_FOR_IMPLEMENTATION_DEVELOPMENT,
  READY_FOR_IMPLEMENTATION_REVIEW,
  READY_FOR_IMPLEMENTATION_TEST,
} from './WorkflowStatuses'
import { v4 as uuidv4 } from 'uuid'
import { EPIC, IMPLEMENTATION, USER_STORY } from './IssueTypes'

export const IMPLEMENTATION_WORKFLOW: Workflow = {
  id: uuidv4(),
  name: 'Implementation Workflow',
  statuses: [
    BACKLOG,
    READY_FOR_IMPLEMENTATION_DEVELOPMENT,
    IN_IMPLEMENTATION_DEVELOPMENT,
    READY_FOR_IMPLEMENTATION_REVIEW,
    IN_IMPLEMENTATION_REVIEW,
    READY_FOR_IMPLEMENTATION_TEST,
    IN_IMPLEMENTATION_TEST,
    IMPLEMENTATION_DONE,
  ],
  issueTypes: [EPIC, USER_STORY, IMPLEMENTATION],
}
