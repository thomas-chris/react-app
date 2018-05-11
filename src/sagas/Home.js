import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchHealthApiRequested, fetchHealthApiSucceeded, fetchHealthApiFailed } from '../actions/home'
import { api } from './api'

export function* watchForGetHealthAPIRequested() {
  yield takeLatest(fetchHealthApiRequested.toString(), fetchHealthApi)
}

export function* fetchHealthApi() {
  try {

    const response = yield call(api.healthAPI);
    const json = yield call([response, response.json]);
    yield put(fetchHealthApiSucceeded({ json }));
  } catch (error) {

    yield put(fetchHealthApiFailed(error));
  }

}
