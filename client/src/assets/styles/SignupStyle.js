import styled from 'styled-components';
import { Wrapper } from './LoginStyle';

export const SignupWrapper = styled(Wrapper)`
  main {
    width: 316px;

    .req-txt {
      font-size: 12px;
      margin: 4px 0;
      color: var(--fc-light);
    }
    .optionalCheck {
      flex-direction: row;
      align-items: flex-start;
      color: var(--fc-dark);
      input {
        width: auto;
        border-radius: 35px;
      }
      label {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin: 0;
        width: calc(100% - 27px);
        cursor: pointer;
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
  }
`;
