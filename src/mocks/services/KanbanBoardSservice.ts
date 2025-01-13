import { v4 as uuidv4 } from 'uuid'
import {
  IMPLEMENTATION_DONE,
  IN_IMPLEMENTATION_DEVELOPMENT,
  IN_IMPLEMENTATION_REVIEW,
  IN_IMPLEMENTATION_TEST,
  READY_FOR_IMPLEMENTATION_DEVELOPMENT,
  READY_FOR_IMPLEMENTATION_REVIEW,
  READY_FOR_IMPLEMENTATION_TEST,
} from '../data/WorkflowStatuses'
import { KanbanBoardType } from '@/components/KanbanBoard.vue'
import { IMPLEMENTATION } from '../data/IssueTypes'

export const KanbanBoardService = {
  baseUrl: 'http://localhost:8080/api/kanban-board',

  getAll() {
    return {}
  },

  getOne(): KanbanBoardType {
    return {
      id: uuidv4(),
      name: 'Implementation Board',
      columns: [
        {
          id: uuidv4(),
          name: 'Ready for Development',
          status: READY_FOR_IMPLEMENTATION_DEVELOPMENT,
        },
        {
          id: uuidv4(),
          name: 'In Development',
          status: IN_IMPLEMENTATION_DEVELOPMENT,
        },
        {
          id: uuidv4(),
          name: 'Ready for Review',
          status: READY_FOR_IMPLEMENTATION_REVIEW,
        },
        {
          id: uuidv4(),
          name: 'In Review',
          status: IN_IMPLEMENTATION_REVIEW,
        },
        {
          id: uuidv4(),
          name: 'Ready for Test',
          status: READY_FOR_IMPLEMENTATION_TEST,
        },
        {
          id: uuidv4(),
          name: 'In Test',
          status: IN_IMPLEMENTATION_TEST,
        },
        {
          id: uuidv4(),
          name: 'Done',
          status: IMPLEMENTATION_DONE,
        },
      ],
      cards: [
        {
          id: uuidv4(),
          summary: 'Create "Sign Up" page',
          type: IMPLEMENTATION,
          status: READY_FOR_IMPLEMENTATION_DEVELOPMENT,
        },
        {
          id: uuidv4(),
          summary: 'Create "Sign Up" endpoint',
          type: IMPLEMENTATION,
          status: IN_IMPLEMENTATION_DEVELOPMENT,
        },
      ]
    }
  },

  post(body = {}) {
    return body
  },

  put(body = {}) {
    return body
  },

  delete() {},
}
