import type { WorkflowStatusCategory } from '@/types/workflow-status-category'
import { v4 as uuidv4 } from 'uuid'

export const TO_DO: WorkflowStatusCategory = {
  id: uuidv4(),
  name: 'To do',
  description: 'Something that is waiting to be done.',
}

export const IN_PROGRESS: WorkflowStatusCategory = {
  id: uuidv4(),
  name: 'In progress',
  description: 'Something that is being worked on.',
}

export const DONE: WorkflowStatusCategory = {
  id: uuidv4(),
  name: 'Done',
  description: 'Something that is finished.',
}
