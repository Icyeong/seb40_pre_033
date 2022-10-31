import Pagination from 'react-js-pagination';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ListWrapper, StyledQuestions, AskQuestion, Container } from './style';
import { Question } from './Question';

export const QuestionsList = () => {
  let questions = useSelector((state) => state.postsReducer);

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState('newest');
  // redux?
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
          <div>{questions.length} questions</div>
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
        {questions.map((post, idx) => (
          <Question key={post.article_id} idx={idx} />
        ))}
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
