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

function* units() {
  const url = `/api/units`
  const options = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }
  return yield call(fetch, url, options)
}

function* unit(unit) {
  const url = `/api/units/${unit.value}`
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
  healthAPI,
  units,
  unit
}

export const parseAsJson = string => {
  try {
    console.log(string)
    return JSON.parse(string)
  } catch (_) {
    return null
  }
}
