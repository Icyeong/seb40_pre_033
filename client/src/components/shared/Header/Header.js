import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GrMenu, GrClose } from 'react-icons/gr'; // 햄버거 버튼, x 버튼
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Dropdown } from '../Sidebar/Dropdown';

const NavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 50px;
  max-width: 100%;
  background-color: #f8f9f9;
  border-top: 3px solid #f48225;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  z-index: 9999;

  > .navbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: #f8f9f9;
    position: relative;
    > .menuBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      padding: 0px 16px;
      cursor: pointer;
      :hover {
        border: none;
        background-color: #e2e6e8;
      }
    }
    > .dropdown-menu {
      position: absolute;
      top: 47px;
      left: 0;
      box-shadow: 0px 0 5px 0px #e2e6e8;
    }
    > .logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 166px;
      height: 44px;
      padding: 0px 8px;
      border: none;
      :hover {
        border: none;
        background-color: #e2e6e8;
      }
      > .logo {
        background: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27)
          no-repeat 0 -502px;
        width: 146px;
        height: 30px;
      }
    }

    > .nav-items {
      position: relative;
      display: flex;
      white-space: nowrap;
      text-decoration: none;
      color: #525960;
      font-size: 12px;
      margin: 2px;
      padding: 6px 12px;
      :hover {
        border: none;
        background-color: #e2e6e8;
        border-radius: 15px;
      }
    }

    > form {
      padding: 0 12px;
      width: 100%;
      max-width: 700px;
      > .input-search {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        flex-wrap: nowrap;
        flex-shrink: 10000;
        flex-grow: 1;
        position: relative;
        padding: 5px 5px;
        background-color: #ffffff;
        border: 1px solid #babfc4;
        border-radius: 4px;
        :focus {
          border: 3px solid blue;
        }

        > input {
          font-size: 12px;
          width: 100%;
          flex-grow: 1;
          height: 14.994px;
          border: none;
          :focus {
            outline: none;
          }
        }
      }
    }

    > .button-login {
      margin: -1px;
      height: 33px;
      background-color: #e1ecf4;
      color: #39739d;
      font-size: 12px;
      padding: 7px 10.4px;
      border: 1px solid #39739d;
      border-radius: 4px;
      :hover {
        background-color: #b3d3ea;
      }
    }

    > .button-signup {
      height: 33px;
      background-color: #0a95ff;
      color: #ffffff;
      font-size: 12px;
      margin: 0 0 0 4px;
      padding: 7px 10.4px;
      border: 1px solid transparent;
      /* box-shadow: inset 0 1px 0 0 #060606; */
      border-radius: 4px;
      :hover {
        background-color: #0074cc;
      }
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  margin-left: 5px;
`;

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
