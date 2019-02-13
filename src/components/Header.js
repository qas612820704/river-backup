import React from 'react';
import styled from '@emotion/styled';
import HeadRoom from 'react-headroom';
import { rhythm } from '../layout/typography';
import { useIsLogin, useUserProfile }from '../hooks';

const Room = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;

  * {
    margin: 0;
  }

  img {
    margin: 0;
    height: ${rhythm(1)};
    border-radius: 50%;

  }
`;

const BedRoom = styled.div`

`;

const Balcony = styled.div`
  display: flex;
  align-items:center;

  span {
    padding-left: ${rhythm(0.5)};
  }
`;

export default function Header() {
  const isLogin = useIsLogin();
  const profile = useUserProfile();

  console.log(isLogin, profile);

  return isLogin && profile && (
    <HeadRoom style={{ background: 'white', boxShadow: '0 0 8px #888888' }}>
      <Room>
        <BedRoom>
          <h2>River</h2>
        </BedRoom>
        <Balcony>
          <img src={profile.picture} alt="O"/>
          <span> Hi, {profile.name}</span>
        </Balcony>
      </Room>
    </HeadRoom>
  )
}
