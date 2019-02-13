import { useCallback, useMemo } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import {
  authentication, setAccessTokenToAxios, registerIfNeeded,
  updateProfile
} from '../redux/actions';
export function useIsLogin() {
  const mapIsLoginState = useCallback(
    state => state.auth.expiresAt > Date.now(),
    [],
  );

  return useMappedState(mapIsLoginState);
}

export function useAuthMessage() {
  const mapAuthMessageState = useCallback(
    state => state.auth.message,
    [],
  );

  return useMappedState(mapAuthMessageState);
}

export function useUserProfile() {
  const mapUserProfileState = useCallback(
    state => state.user,
    []
  );

  return useMappedState(mapUserProfileState);
}

export function useDispatchAuthentication() {
  const dispatch = useDispatch();

  return useMemo(async () => {
    const auth = await dispatch(authentication());

    dispatch(setAccessTokenToAxios(auth.accessToken));

    const profile = await dispatch(registerIfNeeded(auth));

    dispatch(updateProfile(profile));

    return auth;
  }, []);
}
