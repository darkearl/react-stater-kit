// ------------------------------------
// Constants
// ------------------------------------
export const SET_REDIRECT_URL = 'SET_REDIRECT_URL'

// ------------------------------------
// Actions
// ------------------------------------
export function setRedirectUrl(url) {
	return {
		type: SET_REDIRECT_URL,
		payload: {
			redirectUrl: url
		}
	}
}

export const actions = {
  setRedirectUrl
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_REDIRECT_URL]    : (state,payload) => {
    return Object.assign({}, state, {
      ...payload
    });
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  redirectUrl: '/'
}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action.payload) : state
}
