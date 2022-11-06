import styled from 'styled-components';
// import { useState } from 'react';
// import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus } from '../../../../redux/actions/userAction';
import { Link, useNavigate } from 'react-router-dom';

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
  background-image: url(https://www.gravatar.com/avatar/bbe9331b29e219cb3488180135a01921?s=256&d=identicon&r=PG);
  background-repeat: no-repeat;
  background-size: contain;
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
  // const [openCard, setOpencard] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.data);

  // 로그아웃
  const logoutHandler = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(getLoginStatus({ isLogin: false }));
    navigate('/');
    window.location.reload();
  };

  return (
    <Box>
      <Link to="/users/user" className="user-button">
        <UserIcon />
      </Link>
      <UserName>{user && user.nickname}</UserName>
      {/* <UserIconButton
          className="user-button"
          onClick={() => setOpencard((prev) => !prev)}
        /> */}
      {/* {openCard && <Card user={user} setOpencard={setOpencard} />} */}
      <button onClick={logoutHandler}>로그아웃</button>
    </Box>
  );
};
