import { call } from 'redux-saga/effects'

function* currencyAPI() {
  const url = 'http://localhost:3002/health'
  const options = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }
  return yield call(fetch, url, options)
}

export const api = {
  currencyAPI
}

export const parseAsJson = string => {
  try {
    console.log(string)
    return JSON.parse(string)
  } catch (_) {
    return null
  }
}
