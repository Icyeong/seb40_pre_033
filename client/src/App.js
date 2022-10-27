import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import './assets/styles/variables.css';
import AskQuestions from './pages/WritePage/AskQuestions.js';

function App() {
  // const newLocal = '/write';
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" exact={true} component={EditPage} /> */}
        <Route path="/" element={<AskQuestions />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// * 지우지말것
// import { GlobalStyle } from './assets/styles/GlobalStyle';
// import './assets/styles/variables.css';

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <div>삼삼조 화이팅</div>
//     </>
//   );
// }

// export default App;
