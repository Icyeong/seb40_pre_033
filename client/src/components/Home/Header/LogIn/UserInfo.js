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
  border-radius: 10px;
  overflow: hidden;
  background-color: hsl(210, 8%, 85%);
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

export const UserInfo = () => {
  const [openCard, setOpencard] = useState(false);

  return (
    <Box>
      <UserIcon>
        <UserIconButton
          className="user-button"
          onClick={() => setOpencard((prev) => !prev)}
        />
      </UserIcon>
      {openCard && <Card setOpencard={setOpencard} />}
      <UserName>nickname</UserName>
    </Box>
  );
};
