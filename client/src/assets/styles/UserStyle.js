import styled from 'styled-components';

export const UserWrapper = styled.div`
  margin: 50px auto 0 auto;
  width: 100%;
  max-width: 1264px;
  display: flex;

  main {
    width: 100%;
    padding: 24px;
    .responsive {
      display: flex;
      @media screen and (max-width: 980px) {
        flex-direction: column;
      }
    }
    @media screen and (max-width: 980px) {
      padding: 12px;
    }
  }
  .position {
    position: relative;
    width: calc(100% - 164px);
    @media screen and (max-width: 640px) {
      width: 100% !important;
    }

    .profile-btns {
      display: flex;
      position: absolute;
      top: 12px;
      right: 24px;
      button {
        height: 35.84px;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 9.6px;
        margin: 3px;
        color: var(--black-500);
        border: 1px solid var(--black-300);
        border-radius: 3px;
        svg {
          margin-right: 3px;
        }
        &:hover {
          color: var(--black-600);
          background-color: var(--black-025);
        }
      }
    }
  }
  .user-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    .user-imgBox {
      width: 128px;
      height: 128px;
      border-radius: 5px;
      margin-right: 10px;
      cursor: pointer;
      background-image: url(https://www.gravatar.com/avatar/bbe9331b29e219cb3488180135a01921?s=256&d=identicon&r=PG);
      background-size: contain;
      background-repeat: no-repeat;
    }
    .user-info {
      h1 {
        font-size: 34px;
        margin: 4px 4px 12px;
      }
      ul {
        display: flex;
        margin: 0 4px;
        li {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: var(--fc-light);
          margin-right: 8px;
          svg {
            margin-right: 3px;
          }
        }
        li:last-child {
          cursor: pointer;
        }
      }
    }
  }
`;

export const SideContent = styled.section`
  width: 240.75px;
  margin: 12px 12px 12px 0;
  @media screen and (max-width: 980px) {
    width: 100%;
    li {
      width: 25% !important;
    }
  }
  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 13px;
      margin-bottom: 0;
      color: var(--black-500);
      cursor: pointer;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      p {
        display: flex;
        flex: 1;
        justify-content: space-between;
        color: var(--theme-link-color);
        &:hover {
          color: var(--theme-link-color-hover);
        }
      }
    }
  }
  .flex.hover {
    p {
      color: var(--theme-link-color);
      &:hover {
        color: var(--theme-link-color-hover);
      }
    }
  }
  h2 {
    font-size: 21px;
    font-weight: 400;
    color: #232629;
    margin-bottom: 9px;
  }
  .left {
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--bc-medium);
    display: flex;
    margin-bottom: 22px;
    padding: 12px;
    svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
    p {
      margin: 0;
    }
    ul {
      width: 100%;
      justify-content: center;
      li {
        width: 50%;
        height: 39.22px;
        display: flex;
        float: left;
        flex-direction: column;
        justify-content: flex-start;
      }
      li:first-child,
      li:nth-child(2) {
        margin-bottom: 12px;
      }
    }
    span {
      font-size: 13px;
      color: var(--fc-light);
    }
  }
`;

export const UserProfile = styled.section`
  /* width: 782.25px; */
  width: 100%;
  margin: 12px;
  @media screen and (max-width: 980px) {
    margin: 0;
    .right {
      width: 100%;
    }
  }
  h2 {
    font-size: 21px;
    font-weight: 400;
    color: #232629;
    margin-bottom: 9px;
  }
  .right {
    border-radius: 5px;
    border: 1px solid var(--black-075);
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--black-025);
    margin-bottom: 23px;
    p {
      max-width: 415px;
      text-align: center;
      word-break: keep-all;
      font-size: 13px;
      color: var(--fc-light);
      margin: 0;
      span {
        color: var(--theme-link-color);
        cursor: pointer;
        &:hover {
          color: var(--theme-link-color-hover);
        }
      }
    }
    svg {
      width: 196px;
      height: 196px;
    }
  }
`;
