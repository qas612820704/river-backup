const UPDATE_PROFILE = 'UPDATE_PROFILE';

const initialState = {}

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export function updateProfile(auth) {
  return {
    type: UPDATE_PROFILE,
    payload: auth.idTokenPayload,
  }
}

export default user;
