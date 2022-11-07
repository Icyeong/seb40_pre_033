import styled from 'styled-components';
// import { useState } from 'react';
// import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus } from '../../../../redux/actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 0.8rem;
  margin-left: 6px;
  .user-button {
    display: flex;
  }
  .signOut {
    font-size: 18px;
    color: var(--black-600);
  }
`;

export const UserIcon = styled.div`
  width: 24px;
  height: 24px;
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
  margin-right: 25px;
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
        <UserName>{user && user.nickname}</UserName>
      </Link>
      {/* <UserIconButton
          className="user-button"
          onClick={() => setOpencard((prev) => !prev)}
        /> */}
      {/* {openCard && <Card user={user} setOpencard={setOpencard} />} */}
      <button onClick={logoutHandler}>
        <FontAwesomeIcon className="signOut" icon={faSignOut} />
      </button>
    </Box>
  );
};
