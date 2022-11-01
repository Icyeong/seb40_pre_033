import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlueButton } from '../../assets/styles/LoginStyle';
import Input from './Input';
// import useFetch from '../../hooks/useFetch';

const LoginForm = () => {
  // 폼 상태관리
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidPassword, setInvalidPassword] = useState('');
  // ref 사용 Element
  const emailFormEl = useRef();
  const passwordFormEl = useRef();
  // 유효성 검사 준비
  const regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isEmailValid = regExp.test(email);

  const navigate = useNavigate();

  //   input 변경값 저장
  const inputHandler = (e) => {
    const type = e.target.name;

    if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  };

  //   유효성 검사 후 로그인 실행
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // 폼 초기화
    emailFormEl.current.classList.remove('inValid');
    passwordFormEl.current.classList.remove('inValid');

    if (email.trim() === '') {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('Email cannot be empty.');
    } else if (password.trim() === '') {
      passwordFormEl.current.classList.add('inValid');
      return setInvalidPassword('Password cannot be empty.');
    } else if (!isEmailValid) {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('The email is not a valid email address.');
    }

    // 모든 유효성 체크 완료!

    // 보낼 데이터
    let body = {
      email,
      password,
    };
    // fetchOption -> 리팩토링 필요
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    // // 로그인 요청
    const response = await fetch('/auth/login', requestOptions).then((res) => {
      if (!res.ok) {
        throw Error('에러발생');
      } else if (res.ok) {
        const accessToken = res.headers.get('authorization');
        const refreshToken = res.headers.get('refresh');
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        // console.log(accessToken, refreshToken);
        navigate('/');
      }
      return res;
    });
    console.log(response);
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
      <BlueButton onClick={onSubmitHandler}>Log in</BlueButton>
    </form>
  );
};

export default LoginForm;
