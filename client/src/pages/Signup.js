import { SignupWrapper } from '../assets/styles/SignupStyle';
import Options from '../components/login-logout-signup/Options';
import OauthButton from '../components/login-logout-signup/OauthButton';
import SignupForm from '../components/login-logout-signup/SignupForm';
import SignupTxt from '../components/login-logout-signup/SignupTxt';
import { Header } from '../components/Home/Header/Header';

const Signup = () => {
  return (
    <>
      <Header />
      <SignupWrapper>
        <SignupTxt />
        <main>
          <div className="oauth-button-container">
            <OauthButton login="Google" signup="true" />
            <OauthButton login="GitHub" signup="true" />
            <OauthButton login="Facebook" signup="true" />
          </div>
          <SignupForm />
          <Options signup="true" />
        </main>
      </SignupWrapper>
    </>
  );
};

export default Signup;
