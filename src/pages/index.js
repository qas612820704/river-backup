import React from 'react';
import { navigate } from 'gatsby';
import { useIsLogin } from '../hooks';
import Layout from '../layout';
import Loading from '../components/Loading';

export default function Index() {
  const isLogin = useIsLogin();

  if (!isLogin) {
    navigate('/login');
    return <Loading />;
  };

  return (
    <Layout>
      Hello World
    </Layout>
  )
}
