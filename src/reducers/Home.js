import { handleActions } from 'redux-actions'

import { fetchHealthApiFailed, fetchHealthApiSucceeded } from '../actions/home'

const initialState = {
  health: {}
}

export const home = handleActions({
 [fetchHealthApiSucceeded]:  (state, action) => {
   return { ...state,
     health: action.payload.json,
    errors: undefined}
 },
  [fetchHealthApiFailed]: (state, action) => {
   return { ...initialState,
    errors: action.payload,
   }
  }
}, initialState )
