import { TalentSvg } from '../../assets/images/LoginSvg';
import { OptionsWrapper } from '../../assets/styles/LoginStyle';

const LoginOptions = () => {
  return (
    <OptionsWrapper>
      <p className="options">
        Don t have an account?
        <a href="https://naver.com">Sign up</a>
      </p>
      <p className="options">
        Are you an employer?
        <a href="https://naver.com" name="talent">
          Sign up on Talent <TalentSvg />
        </a>
      </p>
    </OptionsWrapper>
  );
};

export default LoginOptions;
