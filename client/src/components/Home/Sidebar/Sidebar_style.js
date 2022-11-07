// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.nav`
  // Mobile
  @media screen and (max-width: 640px) {
    display: none;
  }
  border-right: 1px solid #d6d9dc;
  position: sticky;
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column;
  width: 164px;
  padding-right: 3px;
`;

export const Wrapper = styled.div`
  /* display: flex;
  flex-flow: column nowrap;
  overflow-x: hidden;
  flex-direction: column; */
  margin-top: 30px;
  > .side-bar-tabs {
    float: right;
    margin-top: 25px;
    > .home-link {
      text-decoration: none;
      color: hsl(210, 8%, 45%);

      p {
        padding: 5px 5px 5px 10px;
        border-right: 3px;
        font-size: 13px;
      }
      &:hover {
        color: hsl(210, 8%, 5%);
      }
    }
    .title {
      font-size: 11px;
      margin-bottom: 5px;
      margin-left: 10px;
      color: hsl(210, 8%, 45%);
    }

    > .icon-link {
      text-decoration: none;
      color: hsl(210, 8%, 45%);

      p {
        display: flex;
        padding: 5px 30px 5px 10px;
        margin-bottom: 5px;
        border-right: 3px solid transparent;
        width: 160px;
        font-size: 13px;
        gap: 4px;
        > .icon {
          margin-right: 5px;
        }
      }

      &:hover {
        color: hsl(210, 8%, 5%);
      }
    }
    > .link {
      text-decoration: none;
      color: hsl(210, 8%, 45%);

      p {
        padding: 5px 45px 5px 30px;
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 13px;
      }
      &:hover {
        color: hsl(210, 8%, 5%);
      }
    }

    > .active {
      color: #f2f2f3;
      p {
        color: hsl(210, 8%, 5%);
        font-weight: bold;
        background-color: hsl(210, 8%, 95%);
        border-right: 3px solid hsl(27, 90%, 55%);
        .icon {
          color: hsl(210, 8%, 5%);
        }
      }
    }
    > .tab-menu {
      color: hsl(210, 8%, 45%);
      font-size: 13px;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 34px;
      padding: 0px 0px 4px 0px;
      margin-bottom: 12px;
      :hover {
        border: none;
        color: hsl(210, 8%, 5%);
      }
      > .companies {
        padding-left: 30px;
      }
    }
    > .collectives {
      color: hsl(210, 8%, 45%);
      font-size: 11px;
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
    }
  }

  > .tab-menu2 {
    color: hsl(210, 8%, 45%);
    font-size: 13px;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 34px;
    padding: 8px 18px 8px 5px;
    margin: 0;
    gap: 4px;
    :hover {
      border: none;
      color: hsl(210, 8%, 5%);
    }
  }
  > .teams {
    color: hsl(210, 8%, 45%);
    font-size: 11px;
    margin: 24px 8px 10px 0px;
  }
`;

// export const NavLinkMenu = styled(NavLink)`
//   color: hsl(210, 8%, 45%);
//   font-size: 13px;
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   padding-left: 8px;
//   padding: 8px 6px 8px 0;
//   :hover {
//     border: none;
//     color: hsl(210, 8%, 5%);
//   }
//   /* 선택 시  */
//   &.active {
//     font-weight: 700;
//     color: hsl(210, 8%, 5%);
//     margin-left: 0px;
//     width: 163px;
//     background-color: hsl(210, 8%, 95%);
//     border-right: 3px solid hsl(27, 90%, 55%);
//   }
//   > .paddings {
//     padding-left: 30px;
//   }

//   > svg {
//     margin: 0px 5px 0px 0px;
//   }
// `;

export const Teams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border: 1px solid #e3e6e8;
  border-radius: 4px;

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
