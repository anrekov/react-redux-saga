import { combineReducers } from 'redux'
import { jokesReducer } from './jokes/jokesReducer'

export const rootReducer = combineReducers({
  jokes: jokesReducer,
})
