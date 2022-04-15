import { PACK_JOKES } from './types'

const initialState = {
  jokes: [],
}

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PACK_JOKES: {
      const newJokes = [
        ...state.jokes,
        { id: action.payload.id, text: action.payload.value },
      ]

      localStorage.setItem('jokes', JSON.stringify(newJokes))
      return { ...state, jokes: newJokes }
    }

    default: {
      return state
    }
  }
}
