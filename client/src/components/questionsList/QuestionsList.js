import Pagination from 'react-js-pagination';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListWrapper, StyledQuestions, Container } from './style';
import { Question } from './Question';
import { AskQuestionButton } from '../Question/QuestionHeader';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../redux/actions/questionsAction';
import useFetch from '../../hooks/useFetch';
import { Loading } from '../Common/Loading';

export const QuestionsList = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  // 🔥 userReducer 리팩토링
  const isLoginUser = {
    email: 'a',
    nickname: 'b',
    userId: 1,
  };
  // const isNotLoginUser = {
  //   email: '',
  //   nickname: '',
  //   userId: 0,
  // };
  let { email } = isLoginUser;

  // let { email } = useSelector((state) => state.userReducer);
  let questions = useSelector((state) => state.questionsReducer.data);

  let { page, size, totalElements, totalPages } = useSelector(
    (state) => state.questionsReducer.pageInfo
  );

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

  const handleCurrentPageChange = async (e) => {
    console.log('현재 페이지 번호 체인지');

    setIsLoading(true);
    setCurrentPage(e);

    const res = await useFetch(
      'GET',
      `/articles?page=${e}&size=${perPageCount}`
    ).finally(() => {
      setIsLoading(false);
    });

    dispatch(getQuestions(res));
  };

  const perPageCountClick = async (e) => {
    console.log('페이지 당 글 개수 체인지');

    setIsLoading(true);
    setPerPageCount(Number(e.target.value));

    const res = await useFetch(
      'GET',
      `/articles?page=${currentPage}&size=${e.target.value}`
    ).finally(() => {
      setIsLoading(false);
    });

    dispatch(getQuestions(res));
  };

  return (
    <>
      <ListWrapper>
        <StyledQuestions>
          <div className="title">
            <h1>All Questions</h1>
            <AskQuestionButton>
              <Link to={email ? '/questions/ask' : '/users/login'}>
                Ask Question
              </Link>
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
      {isLoading && <Loading />}
    </>
  );
};
