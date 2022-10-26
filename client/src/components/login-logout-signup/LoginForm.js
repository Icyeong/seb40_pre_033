import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HasErrorSvg } from '../../assets/images/LoginSvg';
import { LoginButton } from '../../assets/styles/LoginStyle';
// import useFetch from '../../hooks/useFetch';

const LoginForm = () => {
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
      <div className="form" ref={emailFormEl}>
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="text"
          name="email"
          value={email}
          onChange={inputHandler}
        />
        <HasErrorSvg />
      </div>
      <p className="inValid-txt inValid-email">{invalidEmail}</p>
      <div className="form" ref={passwordFormEl}>
        <div className="inline">
          <label htmlFor="password-input">Password</label>
          <p>Forgot password?</p>
        </div>
        <input
          id="password-input"
          type="password"
          name="password"
          value={password}
          onChange={inputHandler}
        />
        <HasErrorSvg />
      </div>
      <p className="inValid-txt inValid-password">{invalidPassword}</p>
      <LoginButton onClick={loginHandler}>Log in</LoginButton>
    </form>
  );
};

export default LoginForm;
