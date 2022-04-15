import { LOAD_JOKE, PACK_JOKES } from './types'

export const loadJoke = () => ({
  type: LOAD_JOKE,
})

export const packJokes = (payload) => ({
  type: PACK_JOKES,
  payload,
})
