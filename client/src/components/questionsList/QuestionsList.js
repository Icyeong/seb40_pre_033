import Pagination from 'react-js-pagination';
import { useState } from 'react';
import {
  ListWrapper,
  StyledQuestions,
  AskQuestion,
  QuestionTags,
  Container,
} from './style';

export const QuestionsList = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState('newest');
  // 수정 후 redux로
  const sortClick = (e) => {
    switch (e.target.value) {
      case 'newest':
        setSelected('newest');
        break;
      case 'votes':
        setSelected('votes');
        break;
      default:
        break;
    }
  };
  // const fiveCount = [1, 2, 3, 4, 5];
  const questionCount = [15, 30, 50];
  const [btnClick, setBtnClick] = useState(2);
  const pageClick = (e) => {
    setBtnClick(Number(e.target.value));
  };

  const handleChange = (page) => {
    setPage(page);
  };
  return (
    <ListWrapper>
      <StyledQuestions>
        <div className="title">
          <h1>All Questions</h1>
          <AskQuestion>
            <a href="/questions/ask">Ask Question</a>
          </AskQuestion>
        </div>
        <div className="sort">
          <div> 23,160,164 questions</div>
          <div className="question-sort">
            <button
              onClick={sortClick}
              className={selected === 'newest' ? 'is-selected' : ''}
              value={'newest'}
            >
              Newest
            </button>
            <button
              onClick={sortClick}
              className={selected === 'votes' ? 'is-selected' : ''}
              value={'votes'}
            >
              Votes
            </button>
          </div>
        </div>
        {/* 글 받아오는 부분 */}
        <div className="questions">
          <div className="post-summury">
            <div>0 votes</div>
            <div>2 answers</div>
            <div>2 views</div>
          </div>
          <div className="question-list">
            <h2 className="question-title">
              <a href="/questions/1">
                How to prevent 2 objects from splitting on top of another
              </a>
            </h2>
            <div className="question-content">
              Hello so Im creating a game (since i recently started studying
              javascript). The game is Asteroids the code is basically the same
              as freeCodeCamp video only some differences are the scoring system
              ...
            </div>
            <div className="question-information">
              <QuestionTags>
                <li>sql</li>
                <li>sql-server</li>
                <li>qsqlquery</li>
              </QuestionTags>
              <div className="question__avatar--wrapper">
                {/* profile, author, time */}
                <img
                  className="discussion__avatar--image"
                  src="https://lh3.googleusercontent.com/a-/AFdZucpXdOFmV8dt0puZhTxiEwikZdoIcbWGo_JHU05Q=k-s32"
                  alt=""
                />
                {`Medardas Prusinskas asked ${new Date().toLocaleDateString()}`}
              </div>
            </div>
          </div>
        </div>
        {/*  55 - 좌측 페이지, 1 - 우측 per page ui */}
        <Container>
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            // 한 페이지 당 20개 * 5페이지 = 100
            totalItemsCount={100}
            onChange={handleChange}
            prevPageText="Prev"
            nextPageText="Next"
          />
          <div className="btn-per-page">
            {questionCount.map((el, idx) => {
              return (
                <button
                  key={idx}
                  value={el}
                  className={el === btnClick ? 'btn-active' : ''}
                  onClick={pageClick}
                >
                  {el}
                </button>
              );
            })}
            <p>per page</p>
          </div>
        </Container>
      </StyledQuestions>
    </ListWrapper>
  );
};
