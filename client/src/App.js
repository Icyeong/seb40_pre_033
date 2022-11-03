import { GlobalStyle } from './assets/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/variables.css';
import { HomePage } from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupSuccess from './pages/SignupSuccess';
import { QuestionPage } from './pages/QuestionPage';
import { QuestionWritePage } from './pages/QuestionWritePage';
import { QuestionEditPage } from './pages/QuestionEditPage';
import { AnswerEdit } from './pages/AnswerEdit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLoginStatus } from './redux/actions/userAction';
import jwt_decode from 'jwt-decode';
import { refreshToken } from './hooks/refreshToken';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const { exp } = jwt_decode(token);
        // const time = Date.now();
        if (Date.now() >= exp * 1000) {
          console.log('토큰이 만료됬습니다.');
          console.log(exp);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          dispatch(getLoginStatus({ isLogin: false }));
          // window.reload();

          // 토큰 만료 전 로그인 연장 필요
        } else if (Date.now() >= exp * 1000 - 100000) {
          dispatch(getLoginStatus({ isLogin: true }));
          console.log('토큰이 재발급이 필요.');
          refreshToken();
          console.log(exp);
          // 토큰 유효
        } else {
          dispatch(getLoginStatus({ isLogin: true }));
          console.log('토큰이 유효합니다.');
          console.log(exp);
        }
        console.log('지금시각 : ', Date.now(), 'exp : ', exp * 1000);
      } catch (e) {
        console.log(e);
      }
    }
  });
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/signup/success" element={<SignupSuccess />} />
          <Route path="/questions/:qid" element={<QuestionPage />} />
          <Route path="/questions/ask" element={<QuestionWritePage />} />
          <Route path="/questions/edit/:qid" element={<QuestionEditPage />} />
          <Route
            path="/questions/:qid/answer/edit/:aid"
            element={<AnswerEdit />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
