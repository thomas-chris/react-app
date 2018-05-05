import { handleActions } from 'redux-actions'

import { fetchApiSucceeded } from '../actions/home'

const initialState = {}

export const home = handleActions({
 [fetchApiSucceeded]:  (state, action) => {
   return { ...state, ...action.payload.response}
 }
}, initialState )
