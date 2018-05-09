import { call } from 'redux-saga/effects'

function* healthAPI() {
  const url = `/api/health`
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
  healthAPI
}

export const parseAsJson = string => {
  try {
    console.log(string)
    return JSON.parse(string)
  } catch (_) {
    return null
  }
}
