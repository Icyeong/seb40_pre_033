import { useLocation } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr'; // 햄버거 버튼, x 버튼
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Dropdown } from '../Sidebar/Dropdown';
import { NavBar } from './style';
import { LoggedIn } from './LogIn/LoggedIn';
// import { Auth } from './Auth';

export const Header = () => {
  // let { email } = useSelector((state) => state.userReducer);
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
        <div className="dropdown-menu2">{click ? <Dropdown /> : null}</div>
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
        {/* {email ? <LoggedIn /> : <Auth />} */}
        <LoggedIn />
      </div>
    </NavBar>
  );
};
