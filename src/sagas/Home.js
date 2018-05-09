import { all, call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { fetchApiRequested, fetchApiSucceeded, fetchApiFailed } from '../actions/home'
import { api, parseAsJson } from './api'

export function* watchForGetAPIRequested() {
  yield takeLatest(fetchApiRequested.toString(), fetchApi)
}

export function* fetchApi() {
  try {

    const response = yield call(api.currencyAPI);
    const json = yield call([response, response.json]);
    yield put(fetchApiSucceeded({ json }));
  } catch (error) {

    yield put(fetchApiFailed(error));
  }

}
