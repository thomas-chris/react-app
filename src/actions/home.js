import { createAction } from 'redux-actions'
import { identity } from 'lodash'

export const fetchApiRequested = createAction(
  'FETCH_API_REQUESTED',
  identity
)


export const fetchApiSucceeded = createAction(
  'FETCH_API_SUCCEEDED',
  identity
)

export const fetchApiFailed = createAction(
  'FETCH_API_FAILED',
  identity
)

