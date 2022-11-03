import styled from 'styled-components';
import { useState } from 'react';
import { Card } from './Card';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  font-size: 0.8rem;
`;

export const UserIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  overflow: hidden;
  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;
`;

// 클릭 시 card 이동
export const UserIconButton = styled.button`
  border: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
`;

export const UserName = styled.span`
  padding: 3px;
  font-weight: 700;
`;

export const UserInfo = ({ user }) => {
  const [openCard, setOpencard] = useState(false);
  console.log(user);

  return (
    <Box>
      <UserIcon>
        <UserIconButton
          className="user-button"
          onClick={() => setOpencard((prev) => !prev)}
        />
      </UserIcon>
      {openCard && <Card user={user} setOpencard={setOpencard} />}
      <UserName>{user.nickname}</UserName>
    </Box>
  );
};
