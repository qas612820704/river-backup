import React from 'react';
import { navigate, Link } from 'gatsby';
import Loading from '../components/Loading';
import {
  useIsLogin, useAuthMessage,
  useDispatchAuthentication
} from '../hooks';

import auth from '../apis/auth';


export default function Callback({ location }) {
  useDispatchAuthentication()
    .then(action => {
      navigate('/');
    });

  const { info, error } = useAuthMessage();

  return (
    <Loading>
      { info && <Loading.Info>{info}</Loading.Info>}
      { error && (
        <Loading.Error>
        { error } <Link to='/login'>back to log in!</Link>
        </Loading.Error>
      )}
    </Loading>
  );
}
