import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { useState } from 'react';
import { Container } from './style';

const ListWrapper = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1300px;
  font-size: 17px;
`;

const StyledQuestions = styled.div`
  flex: 1 1 80%;
  margin: 0 0 0 4px;
  padding: 5px 23px;
  width: 80%;
  > .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;
    > h1 {
      font-size: 27px;
    }
  }
  > .sort {
    margin-bottom: 5px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    > .question-sort {
      > button {
        font-size: 12px;
        border: 1px solid hsl(210, 8%, 55%);
        padding: 10px;
        cursor: pointer;
        :first-child {
          border-radius: 3px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        :last-child {
          border-radius: 3px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        :not(:last-child) {
          margin-right: -1px;
        }
        /* 선택시 버튼 색깔 변경 */
        &.is-selected {
          background-color: #e3e6e8;
          color: #3b4045;
          border: 1px solid hsl(210, 8%, 55%);
        }
      }
    }
  }
  > .questions {
    /* border: 1px solid pink; */
    margin-left: -27px;
    display: flex;
    padding-left: 10px;
    padding-top: 15px;
    border-top: 1px solid hsl(210, 8%, 90%);
    border-bottom: 1px solid hsl(210, 8%, 90%); // #d6d9dc;
    font-size: 13px;
    > .post-summury {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 108px;
      flex-shrink: 0;
      margin-right: 10px;
      row-gap: 7px;
      column-gap: 4px;
    }
    /* 클릭 시 색 변경 */
    &.is-selected {
      background-color: #e3e6e8;
      color: #3b4045;
      border: 1px solid hsl(210, 8%, 55%);
    }
    > .question-list {
      > .question-title {
        > a {
          color: hsl(206, 100%, 40%);
          font-size: 17px;
        }
        > a:hover {
          color: hsl(206, 100%, 52%);
        }
      }

      > .question-content {
        margin: 10px;
        flex-direction: column;
      }
      > .question-information {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        > .question__avatar--wrapper {
          padding-top: 10px;
          display: flex;
          flex-direction: row;
          > img {
            margin: 2px 5px 0 0;
            width: 16px;
            height: 16px;
            border-radius: 3px;
            display: block;
}
          }
        }
      }
    }
  }
`;

const AskQuestion = styled.div`
  width: 99px;
  height: 39px;
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  font-size: 13px;
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border-radius: 4px;
  display: flex;
  :hover {
    background-color: #0074cc;
  }
`;

const Tags = styled.ul`
  display: inline-flex;

  li {
    margin-right: 5px;
    padding: 4px 6px;
    color: hsl(205, 47%, 42%);
    background-color: hsl(205, 46%, 92%);
    border-radius: 3px;
    font-size: 12px;
  }
`;

const QuestionTags = styled(Tags)`
  margin: 0px 0 25px 10px;
`;

export const QuestionsList = () => {
  const [page, setPage] = useState(1);
  const questionCount = [15, 30, 50];

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
            <button>Newest</button>
            <button>Votes</button>
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
            itemsCountPerPage={7}
            onChange={handleChange}
            pageRangeDisplayed={5}
            prevPageText="Prev"
            nextPageText="Next"
          />
          <div className="per-page">
            {questionCount}
            <p>per page</p>
          </div>
        </Container>
      </StyledQuestions>
    </ListWrapper>
  );
};
