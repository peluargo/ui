import type { WorkflowStatus } from '@/types/WorkflowStatus'
import { DONE, IN_PROGRESS, TO_DO } from './WorkflowStatusCategories'
import { v4 as uuidv4 } from 'uuid'

export const BACKLOG: WorkflowStatus = {
  id: uuidv4(),
  name: 'Backlog',
  category: TO_DO,
}

export const READY_FOR_IMPLEMENTATION_DEVELOPMENT: WorkflowStatus = {
  id: uuidv4(),
  name: 'Ready for implementation development',
  category: TO_DO,
}

export const IN_IMPLEMENTATION_DEVELOPMENT: WorkflowStatus = {
  id: uuidv4(),
  name: 'In implementation development',
  category: IN_PROGRESS,
}

export const READY_FOR_IMPLEMENTATION_REVIEW: WorkflowStatus = {
  id: uuidv4(),
  name: 'Ready for implementation review',
  category: TO_DO,
}

export const IN_IMPLEMENTATION_REVIEW: WorkflowStatus = {
  id: uuidv4(),
  name: 'In implementation review',
  category: IN_PROGRESS,
}

export const READY_FOR_IMPLEMENTATION_TEST: WorkflowStatus = {
  id: uuidv4(),
  name: 'Ready for implementation test',
  category: TO_DO,
}

export const IN_IMPLEMENTATION_TEST: WorkflowStatus = {
  id: uuidv4(),
  name: 'In implementation test',
  category: IN_PROGRESS,
}

export const IMPLEMENTATION_DONE: WorkflowStatus = {
  id: uuidv4(),
  name: 'Implementation Done',
  category: DONE,
}
