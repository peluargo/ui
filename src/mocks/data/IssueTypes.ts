import { v4 as uuidv4 } from 'uuid'
import type { IssueType } from '@/types/issue-type'

export const EPIC: IssueType = {
  id: uuidv4(),
  name: 'Epic',
  description: 'An product increment that must be developed and delivered.',
  style: {
    icon: 'x',
    textColor: '#FFFFFF',
    backgroundColor: '#673AB7',
  },
}

export const USER_STORY: IssueType = {
  id: uuidv4(),
  name: 'User Story',
  description: 'A small part from an Epic.',
  style: {
    icon: 'x',
    textColor: '#FFFFFF',
    backgroundColor: '#4CAF50',
  },
}

export const IMPLEMENTATION: IssueType = {
  id: uuidv4(),
  name: 'Implementation',
  description: 'A software implementation of an User Story.',
  style: {
    icon: 'x',
    textColor: '#FFFFFF',
    backgroundColor: '#2196F3',
  },
}
