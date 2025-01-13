import type { Sprint } from '@/types/sprint'
import { v4 as uuidv4 } from 'uuid'
import { IMPLEMENTATION } from './IssueTypes'
import { READY_FOR_IMPLEMENTATION_DEVELOPMENT } from './WorkflowStatuses'

export const SPRINT_1: Sprint = {
  id: uuidv4(),
  name: 'Sprint 1',
  goal: 'Implement the Sign Up page.',
  issues: [
    {
      id: uuidv4(),
      summary: 'Create "Sign Up" endpoint',
      type: IMPLEMENTATION,
      status: READY_FOR_IMPLEMENTATION_DEVELOPMENT,
    },
    {
      id: uuidv4(),
      summary: 'Create "Sign Up" page',
      type: IMPLEMENTATION,
      status: READY_FOR_IMPLEMENTATION_DEVELOPMENT,
    },
  ],
}
