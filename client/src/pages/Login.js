import { LogoSvg } from '../assets/images/LoginSvg';
import { Wrapper } from '../assets/styles/LoginStyle';
import LoginForm from '../components/login-logout-signup/LoginForm';
import LoginOptions from '../components/login-logout-signup/LoginOptions';
import OauthButton from '../components/login-logout-signup/OauthButton';

const Login = () => {
  return (
    <Wrapper>
      <main>
        <LogoSvg />
        <div className="login-button-container">
          <OauthButton login="Google" />
          <OauthButton login="GitHub" />
          <OauthButton login="Facebook" />
        </div>
        <LoginForm />
        <LoginOptions />
      </main>
    </Wrapper>
  );
};

export default Login;
