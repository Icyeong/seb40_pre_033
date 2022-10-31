import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DropdownContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column;
  width: 222px;
  background-color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-x: hidden;
  flex-direction: column;
  > div {
    color: hsl(210, 8%, 35%);
    font-size: 11px;
    margin: 20px 8px 0px 8px;
  }
  > .tab-menu {
    color: hsl(210, 8%, 35%);
    font-size: 13px;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 34px;
    padding: 4px 4px 4px 30px;
    margin: 0;
    :hover {
      border: none;
      background-color: #e2e6e8;
    }
  }
`;

export const NavLinkMenu = styled(NavLink)`
  color: hsl(210, 8%, 35%);
  font-size: 13px;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 34px;
  padding-left: 8px;
  > svg {
    margin: 0px 5px 0px 0px;
  }

  :hover {
    color: hsl(210, 8%, 15%);
  }

  /* 선택 시 박스 크기 조절 */
  &.active {
    font-weight: 700;
    color: hsl(210, 8%, 15%);
    margin-left: 1px;
    width: 221px;
    background-color: hsl(210, 8%, 95%);
    border-right: 3px solid hsl(27, 90%, 55%);
  }
`;

export const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border-top: 1px solid #e3e6e8;
  border-bottom: 1px solid #e3e6e8;

  > .textbox {
    padding: 10px;
  }

  > .orange-button {
    font-size: 10px;
    color: #ffffff;
    background-color: hsl(27, 90%, 55%);
    padding: 6.6px;
    border: 1px solid transparent;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    border-radius: 4px;
    width: 139px;
    height: 27.88px;
  }
  > .white-button {
    font-size: 10px;
    color: #6a737c;
    background-color: #ffffff;
    border: none;
    padding: 6.6px;
    width: 139px;
    height: 27.88px;
  }
`;
