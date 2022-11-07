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
import { useDispatch, useSelector } from 'react-redux';
import { getLoginStatus, getmyInfo } from './redux/actions/userAction';
import jwt_decode from 'jwt-decode';
import { refreshToken } from './hooks/refreshToken';
import { TagsPage } from './pages/TagsPage';
import SignupRecovery from './pages/SignupRecovery';
import User from './pages/User';
import { UsersPage } from './pages/UsersPage';
import useFetch from './hooks/useFetch';
import { ScrollToTop } from './components/Common/ScrollToTop';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userReducer.isLogin);

  // 내 정보 가져오기
  const userLoad = async () => {
    const myInfo = await useFetch('GET', '/user/me');
    dispatch(getmyInfo(myInfo));
    console.log('myInfo res', myInfo);
  };

  useEffect(() => {
    if (isLogin) {
      userLoad();
    }

    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const { exp } = jwt_decode(token);
        // 토큰 만료
        if (Date.now() >= exp * 1000) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          dispatch(getLoginStatus({ isLogin: false }));
          window.reload();

          // 토큰 만료 전 로그인 연장 필요
        } else if (Date.now() >= exp * 1000 - 100000) {
          dispatch(getLoginStatus({ isLogin: true }));
          refreshToken();
          // 토큰 유효
        } else {
          dispatch(getLoginStatus({ isLogin: true }));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [isLogin]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/signup/success" element={<SignupSuccess />} />
          <Route path="/users/signup/recovery" element={<SignupRecovery />} />
          <Route path="/questions/:qid" element={<QuestionPage />} />
          <Route path="/questions/ask" element={<QuestionWritePage />} />
          <Route path="/questions/edit/:qid" element={<QuestionEditPage />} />
          <Route path="/answer/edit/:qid/:aid" element={<AnswerEdit />} />
          <Route path="/users/user" element={<User />} />
          <Route path="/tags" element={<TagsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
