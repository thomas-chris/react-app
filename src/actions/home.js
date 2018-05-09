import { createAction } from 'redux-actions'
import { identity } from 'lodash'

export const fetchHealthApiRequested = createAction(
  'FETCH_API_REQUESTED',
  identity
)


export const fetchHealthApiSucceeded = createAction(
  'FETCH_API_SUCCEEDED',
  identity
)

export const fetchHealthApiFailed = createAction(
  'FETCH_API_FAILED',
  identity
)

