import styled from 'styled-components';
import { FacebookSvg, GithubSvg, GoogleSvg } from '../assets/images/LoginSvg';

const Button = styled.button`
  width: 100%;
  margin: 4px 0;
  font-size: 13px;
  border-radius: 7px;
  background-color: white;
  color: #3b4045;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 4px;
  }
`;

const GoogleButton = styled(Button)`
  border: 1px solid var(--black-100);
  &:hover {
    background-color: var(--black-025);
  }
`;

const GitHubButton = styled(Button)`
  border: 1px solid var(--black-100);
  background-color: var(--black-750);
  color: white;
  &:hover {
    background-color: var(--black-800);
  }
`;

const FacebookButton = styled(Button)`
  border-color: transparent;
  background-color: #385499;
  color: white;
  &:hover {
    background-color: #314a86;
  }
`;

const OauthButton = (type) => {
  const loginType = type.login;

  return (
    <>
      {loginType === 'Google' && (
        <GoogleButton>
          <GoogleSvg />
          Log in with {loginType}
        </GoogleButton>
      )}
      {loginType === 'GitHub' && (
        <GitHubButton>
          <GithubSvg />
          Log in with {loginType}
        </GitHubButton>
      )}
      {loginType === 'Facebook' && (
        <FacebookButton>
          <FacebookSvg />
          Log in with {loginType}
        </FacebookButton>
      )}
    </>
  );
};

export default OauthButton;
