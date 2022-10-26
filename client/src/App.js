import { GlobalStyle } from './assets/styles/GlobalStyle';
import './assets/styles/variables.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import Login from './pages/Login';
import { SignupPage } from './pages/SignupPage';
import { QuestionPage } from './pages/QuestionPage';
import { QuestionWritePage } from './pages/QuestionWritePage';
import { QuestionEditPage } from './pages/QuestionEditPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<SignupPage />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
          <Route path="/questions/ask" element={<QuestionWritePage />} />
          <Route path="/questions/edit/:id" element={<QuestionEditPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
