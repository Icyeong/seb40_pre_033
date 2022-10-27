import { LogoSvg } from '../assets/images/LoginSvg';
import { Wrapper } from '../assets/styles/LoginStyle';
import LoginForm from '../components/login-logout-signup/LoginForm';
import Options from '../components/login-logout-signup/Options';
import OauthButton from '../components/login-logout-signup/OauthButton';

const Login = () => {
  return (
    <Wrapper>
      <main>
        <LogoSvg />
        <div className="oauth-button-container">
          <OauthButton login="Google" />
          <OauthButton login="GitHub" />
          <OauthButton login="Facebook" />
        </div>
        <LoginForm />
        <Options />
        {/* <Options /> */}
      </main>
    </Wrapper>
  );
};

export default Login;
