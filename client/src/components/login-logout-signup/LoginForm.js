import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { HasErrorSvg } from '../../assets/images/LoginSvg';
import { BlueButton } from '../../assets/styles/LoginStyle';
import Input from './Input';
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
  const loginHandler = async (e) => {
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

    // 보낼 데이터
    let body = {
      email,
      password,
    };

    const response = await fetch(
      'https://d92f-114-205-132-181.jp.ngrok.io/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    ).then((res) => {
      if (!res.ok) {
        throw Error('에러발생');
      }
      return res;
    });
    console.log(response);

    // const Data = useFetch('http://naver.com');
    let test = 'successs';
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
        smTxt="Forgot password?"
      />
      <BlueButton onClick={loginHandler}>Log in</BlueButton>
    </form>
  );
};

export default LoginForm;
