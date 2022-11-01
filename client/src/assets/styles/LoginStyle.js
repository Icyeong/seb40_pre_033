import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  min-height: 100vh;
  background-color: var(--black-050);
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    margin-bottom: 15px;
  }
  .oauth-button-container {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  form {
    width: 100%;
    padding: 20px 24px 24px 24px;
    margin-bottom: 10px;
    background: var(--white);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  }

  form label {
    font-size: 15px;
    font-weight: 600;
    margin: 4px 0;
    padding: 0 2px;
  }
  form div {
    margin: 4px 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .inline {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .inline p {
    font-size: 11px;
    cursor: pointer;
    color: #0074cc;

    &:hover {
      color: var(--blue-500);
    }
  }
  form input {
    width: 100%;
    max-height: 32.59px;
    padding: 8px 32px 8px 9px;
    font-size: 13px;
    background-color: white;
    border-radius: 3px;
    border: 1px solid var(--bc-darker);

    &:focus {
      border: 1px solid var(--blue-600);
      outline: 3px solid var(--blue-100);
    }

    /* &.inValid {
      border: 1px solid var(--red-400);

      &:focus {
        outline: 3px solid var(--red-050);
      }
    } */
  }
  form svg {
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 1;
    display: none;
  }
  .form + .inValid-txt {
    display: none;
  }

  .form.inValid {
    input {
      border: 1px solid var(--red-400);

      &:focus {
        outline: 3px solid var(--red-050);
      }
    }
    svg {
      display: block;
    }

    + .inValid-txt {
      color: var(--red-500);
      font-size: 11px;
      margin: 2px 1px;
      display: block;
    }
  }
  .inValid-password {
    display: none;
  }
`;

export const BlueButton = styled.button`
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: var(--blue-500);
  color: var(--white);
  cursor: pointer;
  margin-top: 15px;
  padding: 10px;
  font-size: 13px;
  &:hover {
    background-color: var(--blue-600);
  }
`;

export const OptionsWrapper = styled.section`
  padding: 16px 0;
  margin: 0 0 24px;
  font-size: 13px;
  text-align: center;
  p {
    display: flex;
    justify-content: center;
  }

  a {
    font-size: 13px;
    color: #0074cc;
    text-decoration: none;
    margin-left: 3px;
    fill: #0074cc;
    display: flex;
    align-items: flex-end;
  }

  a:hover {
    color: var(--blue-500);
    fill: var(--blue-500);
  }

  a svg {
    margin-left: 3px;
  }
`;
