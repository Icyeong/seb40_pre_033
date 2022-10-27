import { GlobalStyle } from './assets/styles/GlobalStyle';
import './assets/styles/variables.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
          <Route path="/users/login" element={<Login />} />\
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/Questions/:id" element={<QuestionPage />} />
          <Route path="/Questions/ask" element={<QuestionWritePage />} />
          <Route path="/Questions/edit/:id" element={<QuestionEditPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
