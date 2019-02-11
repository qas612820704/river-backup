const UPDATE_AUTH = 'UPDATE_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH';
const SET_AUTH_MESSAGE = 'SET_AUTH_MESSAGE';

const initialState = {
  accessToken: '',
  idToken: '',
  expiresAt: Date.now(),
  message: {
    info: '',
    error: '',
  }
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        ...action.payload,
      }
    case CLEAR_AUTH:
      return initialState;
    case SET_AUTH_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          [action.payload.type]: action.payload.message,
        }
      }
    default:
      return state;
  }
}

export function updateAuth(auth) {
  return {
    type: UPDATE_AUTH,
    payload: auth,
  };
}

export function clearAuth() {
  return { type: CLEAR_AUTH };
}

export function setAuthMessage(type, message) {
  return {
    type: SET_AUTH_MESSAGE,
    payload: {
      type,
      message,
    },
  };
}

export function setAuthErrorMessage(message) {
  return setAuthMessage('error', message);
}

export function setAuthInfoMessage(message) {
  return setAuthInfoMessage('info', message);
}

export function authentication() {
  return async (dispatch, getState, apis) => {
    try {
      const { accessToken, idToken, expiresIn } = await apis.authentication();
      return dispatch(
        updateAuth({
          accessToken,
          idToken,
          expiresAt: Date.now() + expiresIn,
        })
      );
    } catch (err) {
      return dispatch(
        setAuthErrorMessage(`${err.name} — ${err.message}`)
      );
    }
  }
}

export default auth;
