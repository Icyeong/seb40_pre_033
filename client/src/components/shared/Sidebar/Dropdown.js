import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const DropdownContainer = styled.nav`
  position: sticky;
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column;
  width: 222px;
  height: 570px;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-x: hidden;
  flex-direction: column;
  > div {
    font-size: 13px;
    margin: 20px 8px 0px 8px;
  }
  > .tab-menu {
    color: #525960;
    font-size: 13px;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 34px;
    padding: 4px 4px 4px 30px;
    margin: 0;
  }
`;

const NavLinkMenu = styled(NavLink)`
  color: #525960;
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
    color: #0c0d0e;
  }

  /* 선택 시 박스 크기 조절 */
  &.active {
    font-weight: 700;
    color: #0c0d0e;
    margin-left: 1px;
    width: 221px;
    background-color: #f1f2f3;
    border-right: 3px solid #f48225;
  }
`;

const Teams = styled.div`
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
    background-color: #f48225;
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

export const Dropdown = () => {
  return (
    <DropdownContainer>
      <Wrapper>
        <div>PUBLIC</div>
        <NavLinkMenu to="/">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
          </svg>
          Questions
        </NavLinkMenu>
        <div className="tab-menu">Tags</div>
        <div className="tab-menu">Users</div>
        <div>
          COLLECTIVES
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path>
          </svg>
        </div>
        <NavLinkMenu>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="rgb(244,130,37)"
          >
            <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path>
          </svg>
          Explore Collectives
        </NavLinkMenu>
        <div>TEAMS</div>
        <Teams>
          <div className="textbox">
            <strong>Stack Overflow for Teams -</strong>
            Start collaborating and sharing organizational knowledge.
          </div>
          <img
            src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
            width="139"
            height="114"
            alt="promo"
          />
          <button className="orange-button">Create a free Team</button>
          <button className="white-button">Why Teams?</button>
        </Teams>
      </Wrapper>
    </DropdownContainer>
  );
};
