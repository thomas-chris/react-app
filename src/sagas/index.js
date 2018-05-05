import { all } from 'redux-saga/effects'
import { watchForGetAPIRequested } from './Home'


export default function* () {
  yield all ([
    watchForGetAPIRequested()
  ])
}
