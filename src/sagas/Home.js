import { all, call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { fetchApiRequested } from '../actions/home'

export function* watchForGetAPIRequested() {
  yield takeLatest(fetchApiRequested.toString(), fetchApi)
}

export function* fetchApi(action) {
  console.log('This function is fired off by the action to request the api call')

}
