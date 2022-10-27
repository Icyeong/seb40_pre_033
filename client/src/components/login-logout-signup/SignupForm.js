import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlueButton } from '../../assets/styles/LoginStyle';
import Input from './Input';
import OptionalInput from './OptionalInput';
import Recaptcha from './Recaptcha';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidPassword, setInvalidPassword] = useState('');
  const regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailFormEl = useRef();
  const passwordFormEl = useRef();
  const navigate = useNavigate();

  //   유효성 검사 후 로그인 실행
  const loginHandler = (e) => {
    e.preventDefault();
    emailFormEl.current.classList.remove('inValid');
    passwordFormEl.current.classList.remove('inValid');
    let isValid = regExp.test(email);

    if (email.trim() === '') {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('Email cannot be empty.');
    } else if (password.trim() === '') {
      passwordFormEl.current.classList.add('inValid');
      return setInvalidPassword('Password cannot be empty.');
    } else if (!isValid) {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('The email is not a valid email address.');
    }

    // const Data = useFetch('http://naver.com');
    let test = 'success';
    // 로그인이 성공되면 홈페이지로 페이지 변경
    if (test === 'success') {
      navigate('/');
    }
  };

  //   input 변경값 저장
  const inputHandler = (e) => {
    const type = e.target.name;

    if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  };
  return (
    <form>
      <Input label="Display name" id="name-input" type="text" name="name" />
      <Input
        label="Email"
        id="email-input"
        type="text"
        name="email"
        inputRef={emailFormEl}
        value={email}
        onChange={inputHandler}
        invalidTxt={invalidEmail}
      />
      <Input
        label="Password"
        id="password-input"
        type="password"
        name="password"
        inputRef={passwordFormEl}
        value={password}
        onChange={inputHandler}
        invalidTxt={invalidPassword}
        reqTxt="Passwords must contain at least eight characters, including at least 1 letter and 1 number."
      />
      <Recaptcha />
      <OptionalInput />
      <BlueButton onClick={loginHandler}>Sign up</BlueButton>
      <div className="terms">
        By clicking “Sign up”, you agree to our
        <a href="https://stackoverflow.com/legal/terms-of-service/public">
          terms of service
        </a>
        ,
        <a href="https://stackoverflow.com/legal/privacy-policy">
          privacy policy
        </a>
        and{' '}
        <a href="https://stackoverflow.com/legal/cookie-policy">
          cookie policy
        </a>
      </div>
    </form>
  );
};

export default SignupForm;
