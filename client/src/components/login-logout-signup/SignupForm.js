import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlueButton } from '../../assets/styles/LoginStyle';
// import useFetch from '../../hooks/useFetch';
import Input from './Input';
import OptionalInput from './OptionalInput';
import Recaptcha from './Recaptcha';
import Terms from './Terms';

const SignupForm = () => {
  // 폼 상태관리
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [opt, setOpt] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidPassword, setInvalidPassword] = useState('');
  const [isOnlyString, setIsOnlyString] = useState(false);
  const [isOnlyNumber, setIsOnlyNumber] = useState(false);
  const [robotCheck, setRobotCheck] = useState(false);
  // ref 사용 ELement
  const recaptchaTxt = useRef();
  const emailFormEl = useRef();
  const passwordFormEl = useRef();
  // 유효성 검사 준비
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
  const passRegExp2 = /^[0-9]+$/;
  const isEmailValid = regExp.test(email);

  const navigate = useNavigate();

  // input 변경값 저장
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

  // sign up 버튼 클릭시 실행
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // 폼 초기화
    emailFormEl.current.classList.remove('inValid');
    passwordFormEl.current.classList.remove('inValid');
    recaptchaTxt.current.classList.remove('inValid');
    setIsOnlyNumber(false);
    setIsOnlyString(false);

    // 유효성 검사
    // 이메일과 비밀번호 모두 공백
    if (email.trim() === '' && password.trim() === '') {
      setInvalidEmail('Email cannot be empty.');
      setInvalidPassword('Password cannot be empty.');
      emailFormEl.current.classList.add('inValid');
      passwordFormEl.current.classList.add('inValid');
      return;
      // 이메일 공백
    } else if (email.trim() === '') {
      emailFormEl.current.classList.add('inValid');
      return setInvalidEmail('Email cannot be empty.');

      // 비밀번호 공백
    } else if (password.trim() === '') {
      passwordFormEl.current.classList.add('inValid');
      return setInvalidPassword('Password cannot be empty.');

      // 문자만 있는경우
    } else if (passRegExp.test(password)) {
      passwordFormEl.current.classList.add('inValid');
      setIsOnlyString(true);
      setIsOnlyNumber(false);
      return setInvalidPassword(
        'Please add one of the following things to make your password stronger:'
      );
      // 숫자만 있는경우
    } else if (passRegExp2.test(password)) {
      passwordFormEl.current.classList.add('inValid');
      setIsOnlyNumber(true);
      setIsOnlyString(false);
      return setInvalidPassword(
        'Please add one of the following things to make your password stronger:'
      );
      // 비밀번호 8자 이하
    } else if (password.trim().length < 8) {
      let needMore = 8 - password.trim().length;
      passwordFormEl.current.classList.add('inValid');
      return setInvalidPassword(
        `Must contain at least ${needMore} more character.`
      );
      // 이메일 형식체크
    } else if (!isEmailValid) {
      emailFormEl.current.classList.add('inValid');
      console.log(isOnlyNumber, isOnlyString);
      return setInvalidEmail('The email is not a valid email address.');
      // 로봇이 아닙니다
    } else if (!robotCheck) {
      recaptchaTxt.current.classList.add('inValid');
    }

    // 모든 유효성 체크 완료!

    // 보낼 데이터
    let body = {
      nickname: name,
      email,
      password,
      opt,
    };
    // fetchOption -> 리팩토링 필요
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    // 회원가입 요청
    // useFetch('POST', '/auth/signup', body);
    const response = await fetch('/auth/signup', requestOptions).then((res) => {
      if (!res.ok) {
        throw Error('에러발생');
      } else if (res.ok) {
        navigate('/users/signup/success');
      }
      return res.json();
    });
    console.log(response);
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
        onlyString={isOnlyString}
        onlyNumber={isOnlyNumber}
      />
      <p className="req-txt">
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </p>
      <Recaptcha
        robotCheck={robotCheck}
        setRobotCheck={setRobotCheck}
        myRef={recaptchaTxt}
      />
      <OptionalInput opt={opt} setOpt={setOpt} />
      <BlueButton onClick={onSubmitHandler}>Sign up</BlueButton>
      <Terms />
    </form>
  );
};

export default SignupForm;
