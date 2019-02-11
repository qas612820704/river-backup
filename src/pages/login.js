import React, { useCallback } from 'react';
import Layout from '../layout';
import { login } from '../apis';

export default function Index() {
  const handleLogin = useCallback(() => login());

  return (
    <Layout>
      <h1>River — <small style={{ color: 'var(--secondary-color)' }}>Read it forever!</small></h1>
      <p>
        Please
        <button
          onClick={handleLogin}
          style={{
            border: 0,
            background: 'none',
            color: 'blue',
            textDecoration: 'underline',
          }}
        >
          log in
        </button>
        to use this application.
      </p>
    </Layout>
  )
}
