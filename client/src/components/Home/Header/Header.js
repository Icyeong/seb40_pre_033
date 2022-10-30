import { useLocation } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr'; // 햄버거 버튼, x 버튼
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Dropdown } from '../Sidebar/Dropdown';
import { NavBar, NavLink } from './style';

export const Header = () => {
  const location = useLocation().pathname;
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(false);
  }, [location]);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <NavBar>
      <div className="navbar-wrapper">
        <button className="menuBtn" onClick={handleClick}>
          {click ? <GrClose /> : <GrMenu />}
        </button>
        <div className="dropdown-menu">{click ? <Dropdown /> : null}</div>
        <a href="/" className="logo-wrapper">
          <div className="logo" />
        </a>
        <a href="https://stackoverflow.co/" className="nav-items">
          About
        </a>
        <a href="/" className="nav-items">
          Products
        </a>
        <a href="https://stackoverflow.co/teams/" className="nav-items">
          For Teams
        </a>
        <form className="search">
          <div className="input-search">
            <AiOutlineSearch size={20} color="#838C95" />
            <input
              type="text"
              className="logo-search"
              placeholder="Search..."
            />
          </div>
        </form>
        <NavLink to="/users/login" className="button-login">
          Log in
        </NavLink>
        <NavLink to="/users/signup" className="button-signup">
          Sign up
        </NavLink>
      </div>
    </NavBar>
  );
};
