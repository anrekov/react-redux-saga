import { PACK_JOKES } from './types'

const initialState = {
  jokes: [],
}

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PACK_JOKES: {
      return {
        ...state,
        jokes: [
          ...state.jokes,
          { id: action.payload.id, text: action.payload.value },
        ],
      }
    }

    default: {
      return state
    }
  }
}
