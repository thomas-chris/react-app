import { all } from 'redux-saga/effects'
import { watchForGetHealthAPIRequested } from './Home'


export default function* () {
  yield all ([
    watchForGetHealthAPIRequested()
  ])
}
