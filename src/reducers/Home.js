import { handleActions } from 'redux-actions'

import { fetchHealthApiRequested, fetchHealthApiFailed, fetchHealthApiSucceeded } from '../actions/home'

const initialState = {
  health: {}
}

export const home = handleActions({
  [fetchHealthApiRequested]: (state, action) => {
    return { ...initialState }
  },
  [fetchHealthApiSucceeded]:  (state, action) => {
   return { ...state,
     health: action.payload.json}
 },
  [fetchHealthApiFailed]: (state, action) => {
   return { ...state,
    errors: action.payload}
  }
}, initialState )
