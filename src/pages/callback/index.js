import React from 'react';
import styled from '@emotion/styled';
import Layout from '../../layout';
import loading from './loading.svg';

const LandScape = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function Callback(props) {
  return (
    <Layout>
      <LandScape>
        <img src={loading} alt="loadding..." />
      </LandScape>
    </Layout>
  )
}
