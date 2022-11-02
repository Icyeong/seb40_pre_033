import Pagination from 'react-js-pagination';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListWrapper, StyledQuestions, Container } from './style';
import { Question } from './Question';
import { AskQuestionButton } from '../Question/QuestionHeader';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../redux/actions/questionsAction';
// import axios from 'axios';

export const QuestionsList = () => {
  const dispatch = useDispatch();

  let questions = useSelector((state) => state.questionsReducer.data);
  let { page, size, totalElements, totalPages } = useSelector(
    (state) => state.questionsReducer.pageInfo
  );

  // const [mydata, setData] = useState([]);

  // axios
  //   .get('https://7193b487-9896-42b5-a29f-6ddbb18132f5.mock.pstmn.io/list')
  //   .then((result) => {
  //     setData(result.data);
  //     console.log('#1', result.data);
  //     console.log('#2', mydata);
  //   })
  //   .catch(() => {});

  // ✨ 정렬
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

  // ✨ 페이지네이션
  const [currentPage, setCurrentPage] = useState(page); // 현재 페이지 번호
  const [perPageCount, setPerPageCount] = useState(size); // 페이지 당 글 개수

  const perPageCountList = [10, 15, 20];

  const handleCurrentPageChange = (e) => {
    console.log('현재 페이지 번호 체인지');

    setCurrentPage(e);

    dispatch(getQuestions(e, perPageCount));
  };

  const perPageCountClick = (e) => {
    console.log('페이지 당 글 개수 체인지');

    setPerPageCount(Number(e.target.value));

    dispatch(getQuestions(currentPage, e.target.value));
  };

  return (
    <ListWrapper>
      <StyledQuestions>
        <div className="title">
          <h1>All Questions</h1>
          <AskQuestionButton>
            <Link to="/questions/ask">Ask Question</Link>
          </AskQuestionButton>
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
        {/* {mydata.map((i) => {
          return <Question key={i.article_id} />;
        })} */}
        <Container>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={size}
            // 한 페이지 당 20개 * 5페이지 = 100
            totalItemsCount={totalElements}
            pageRangeDisplayed={totalPages}
            onChange={handleCurrentPageChange}
            prevPageText="Prev"
            nextPageText="Next"
          />
          <div className="btn-per-page">
            {perPageCountList.map((el, idx) => {
              return (
                <button
                  key={idx}
                  value={el}
                  className={el === perPageCount ? 'btn-active' : ''}
                  onClick={perPageCountClick}
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
