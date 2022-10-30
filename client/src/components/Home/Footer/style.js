import styled from 'styled-components';

export const FooterContainer = styled.footer`
  /* margin-top: 50px; */
  background-color: #232629;
  color: hsl(210, 8%, 60%);
  > .footer {
    box-sizing: border-box;
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 12px 12px 12px;
    display: flex;
    flex-flow: row wrap;

    a {
      text-decoration: none;
      color: hsl(210, 8%, 60%);
      cursor: pointer;
    }

    li,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    > .footer-logo {
      flex: 0 0 64px;
      margin: -12px 0 32px 0;
    }
    > .footer-nav {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;
      > .footer-column {
        padding: 0 12px 24px 0;
        flex: 1 0 auto;
        > h5 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 13px;
          font-weight: bold;
          color: hsl(210, 8%, 75%);
          > a {
            color: inherit;
          }
        }
        > ul {
          font-size: 13px;
          > li {
            margin: 0;
            padding: 4px 0;
          }
        }
      }
    }
    > .footer-copyright {
      display: flex;
      flex: 1 1 150px;
      flex-direction: column;
      box-sizing: border-box;
      font-size: 11px;
      > ul {
        display: flex;
        > li {
          padding: 4px 0;
          margin-left: 12px;
          font-size: 11px;
          line-height: calc(17 / 13);
          :first-child {
            margin-left: 0;
          }
        }
      }
      > p {
        margin-top: auto;
        margin-bottom: 24px;
        line-height: 1.4;
      }
    }
  }
`;
