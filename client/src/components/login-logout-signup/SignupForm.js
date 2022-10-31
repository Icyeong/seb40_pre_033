// import axios from 'axios';
import { useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { BlueButton } from '../../assets/styles/LoginStyle';
// import useFetch from '../../hooks/useFetch';
// import { registerUser } from '../../redux/actions/userAction';
import Input from './Input';
import OptionalInput from './OptionalInput';
import Recaptcha from './Recaptcha';

const SignupForm = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [opt, setOpt] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidPassword, setInvalidPassword] = useState('');
  const regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailFormEl = useRef();
  const passwordFormEl = useRef();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    emailFormEl.current.classList.remove('inValid');
    passwordFormEl.current.classList.remove('inValid');
    let isValid = regExp.test(email);

    console.log(email.trim() === '', password.trim() === '');

    // 유효성 검사
    if (email.trim() === '' && password.trim() === '') {
      setInvalidEmail('Email cannot be empty.');
      setInvalidPassword('Password cannot be empty.');
      emailFormEl.current.classList.add('inValid');
      passwordFormEl.current.classList.add('inValid');
      return;
    } else if (email.trim() === '') {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('Email cannot be empty.');
    } else if (password.trim() === '') {
      passwordFormEl.current.classList.add('inValid');
      return setInvalidPassword('Password cannot be empty.');
    } else if (password.trim().length <= 8 && typeof password === 'string') {
      passwordFormEl.current.classList.add('inValid');
      return setInvalidPassword(
        'Please add one of the following things to make your password stronger:'
      );
    } else if (!isValid) {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('The email is not a valid email address.');
    }

    // 보낼 데이터
    let body = {
      nickname: 'hi',
      email,
      password,
    };

    console.log(JSON.stringify(body));

    // const requestOptions = {
    //   Headers: {
    //     'Content-Type': 'application/json',
    //     'ngrok-skip-browser-warning': 'any value',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   Body: JSON.stringify(body),
    // };

    const response = await fetch(
      'https://d92f-114-205-132-181.jp.ngrok.io/auth/signup',
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
    // dispatch(registerUser(body));
    //   alert('가입이 정상적으로 완료되었습니다.');
    //   navigate('/');
  };

  //   input 변경값 저장
  const inputHandler = (e) => {
    const type = e.target.name;

    if (type === 'name') {
      setName(e.target.value);
    } else if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  };
  return (
    <form>
      <Input
        label="Display name"
        id="name-input"
        type="text"
        name="name"
        value={name}
        onChange={inputHandler}
        opt={opt}
        setOpt={setOpt}
      />
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
      <OptionalInput opt={opt} setOpt={setOpt} />
      <BlueButton onClick={onSubmitHandler}>Sign up</BlueButton>
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
