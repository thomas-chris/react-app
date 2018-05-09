import { handleActions } from 'redux-actions'

import { fetchApiSucceeded } from '../actions/home'

const initialState = {
  health: {},
  errors: []
}

export const home = handleActions({
 [fetchApiSucceeded]:  (state, action) => {
   return { ...state,
     health: action.payload.json}
 }
}, initialState )
