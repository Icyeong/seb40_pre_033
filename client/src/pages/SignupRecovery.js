import styled from 'styled-components';
import { BlueButton } from '../assets/styles/LoginStyle';
import { SignupWrapper } from '../assets/styles/SignupStyle';
import { Header } from '../components/Home/Header/Header';
import Input from '../components/login-logout-signup/Input';

const RecoveryWrapper = styled(SignupWrapper)`
  form {
    width: 316px;
    min-width: 316px;

    p {
      font-size: 13px;
      margin-bottom: 5px;
    }
    button {
      margin-top: 10px;
    }

    @media screen and (max-width: 640px) {
      min-width: 0;
      width: 267px;
    }
    @media screen and (max-width: 300px) {
      width: 100%;
    }
  }
`;

const SignupRecovery = () => {
  return (
    <>
      <Header />
      <RecoveryWrapper>
        <form>
          <p>
            Forgot your account’s password or having trouble logging into your
            Team? Enter your email address and we’ll send you a recovery link.
          </p>
          <Input label="Email" />
          <BlueButton>Send recovery email</BlueButton>
        </form>
      </RecoveryWrapper>
    </>
  );
};

export default SignupRecovery;
