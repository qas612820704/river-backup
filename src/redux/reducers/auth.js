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
  return setAuthMessage('info', message);
}

export function authentication() {
  return async (dispatch, getState, apis) => {
    try {
      dispatch(
        setAuthInfoMessage('parsing authentication callback...')
      );

      const auth = await apis.authentication();
      const { accessToken, idToken, expiresIn } = auth;

      dispatch(
        updateAuth({
          accessToken,
          idToken,
          expiresAt: Date.now() + expiresIn,
        })
        );

      dispatch(
        setAuthInfoMessage('parsing authentication callback done')
      );

      return auth;
    } catch (err) {
      dispatch(
        setAuthErrorMessage(`${err.name} — ${err.message}`)
      );
      throw err;
    }
  }
}

export function setAccessTokenToAxios(accessToken) {
  return async (dispatch, getState, apis) => {
    dispatch(
      setAuthInfoMessage('set accessToken to axios...')
    );

    apis.axiosSetHeaders({ 'Authorization': `Bearer ${accessToken}`});

    dispatch(
        setAuthInfoMessage('set accessToken to axios done')
    );
  }
}

export function registerIfNeeded(auth) {
  return async (dispatch, getState, apis) => {
    dispatch(
      setAuthInfoMessage('register if needed...')
    );

    try {
      const response = await apis.register(auth);
    } catch (err) {
      dispatch(
        setAuthErrorMessage(`${err.name} ${err.message}`)
      );

      throw err;
    }

    dispatch(
      setAuthInfoMessage('register if needed done')
    );
  }
}

export default auth;
