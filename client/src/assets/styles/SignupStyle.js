import styled from 'styled-components';
import { Wrapper } from './LoginStyle';

export const SignupWrapper = styled(Wrapper)`
  main {
    width: 316px;
    min-width: 316px;
    h1 {
      display: none;
    }

    .inValid-password {
      display: block;
    }
    .req-txt {
      font-size: 12px;
      margin: 4px 0;
      line-height: 16px;
      color: var(--fc-light);
    }

    ul {
      margin: 5px 0 15px;
      padding: 0 30px;
      li {
        font-size: 12px;
        color: var(--red-500);
        list-style: disc;
      }
    }
    .optionalCheck {
      flex-direction: row;
      align-items: flex-start;
      color: var(--fc-dark);
      #opt-check {
        width: auto;
        border-radius: 35px;
        margin-top: 3px;
        border: 1px solid var(--bc-darker);
      }
      label {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin: 0 0 0 3px;
        width: calc(100% - 27px);
        cursor: pointer;
      }
      .bootsBtn {
        max-width: 14px;
        width: 14px;
        height: 14px;
        background: transparent;
        border: none;
      }
      svg {
        display: block;
        cursor: pointer;
        position: static;
      }
    }
    .terms {
      font-size: 12px;
      color: var(--fc-light);
      margin-top: 32px;
      a {
        display: contents;
        color: var(--blue-600);
        &:hover {
          color: var(--blue-500);
        }
      }
    }
    @media screen and (max-width: 817px) {
      h1 {
        width: 421px;
        font-size: 21px;
        margin-bottom: 24px;
        text-align: center;
        font-weight: 400;
        line-height: 27px;
        display: block;
      }
    }
    @media screen and (max-width: 640px) {
      min-width: 0;
      width: 267px;
    }
    @media screen and (max-width: 300px) {
      width: 100%;
      h1 {
        width: 90%;
      }
    }
  }
`;
