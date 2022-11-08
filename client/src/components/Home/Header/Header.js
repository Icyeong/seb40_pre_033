import { Link, useLocation } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr'; // 햄버거 버튼, x 버튼
import { useEffect, useState } from 'react';
import { NavBar, NavLink } from './style';
import { LoggedIn } from './LogIn/LoggedIn';
import { useSelector } from 'react-redux';
import { SearchBox } from './Search/SearchBox';
import { Dropdown } from '../Sidebar/Dropdown';

export const Header = (type) => {
  const user = useSelector((state) => state.userReducer);
  const location = useLocation().pathname;
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(false);
  }, [location]);

  const handleClick = () => {
    console.log('햄버거 클릭');
    setClick(!click);
  };

  return (
    <NavBar>
      <div className="navbar-wrapper">
        <button className="menuBtn" onClick={handleClick}>
          {click ? <GrClose /> : <GrMenu />}
        </button>
        <div className="dropdown-menu2">
          {click ? <Dropdown page2={type.page2} /> : null}
        </div>
        <Link to="/" className="logo-wrapper">
          <div className="logo"></div>
        </Link>
        <div className="nav-items">About</div>
        <div className="nav-items">Products</div>
        <div className="nav-items">For Teams</div>
        <SearchBox />
        {user.isLogin ? (
          <LoggedIn />
        ) : (
          <>
            <NavLink to="/users/login" className="button-login">
              Log in
            </NavLink>
            <NavLink to="/users/signup" className="button-signup">
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </NavBar>
  );
};
