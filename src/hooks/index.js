import { useCallback, useEffect, useMemo } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { authentication } from '../redux/actions';

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

export function useDispatchAuthentication() {
  const dispatch = useDispatch();

  return useMemo(() => {
    return dispatch(authentication());
  }, []);
}
