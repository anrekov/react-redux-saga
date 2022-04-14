import { call, put, takeEvery } from 'redux-saga/effects'
import { packJokes } from './actions'
import { LOAD_JOKE } from './types'

export function* sagaWatcher() {
  yield takeEvery(LOAD_JOKE, sagaWorker)
}

function* sagaWorker() {
  try {
    // call == await result
    const payload = yield call(loadJoke)
    // put === dispatch
    yield put(packJokes(payload))
  } catch (err) {
    yield console.log('err', err)
  }
}

async function loadJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  return await response.json()
}
