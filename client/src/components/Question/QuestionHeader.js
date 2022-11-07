import styled from 'styled-components';
import { BlueButton } from '../Common/BlueButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0 0 8px 0;
    font-size: 27px;
    color: var(--black-700);

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: flex-end;

    h1 {
      font-size: 22.8462px;
      width: 100%;
    }
  }
`;

export const AskQuestionButton = styled(BlueButton)`
  margin-left: 12px;
  min-width: 100.115px;
  height: 42px;
  padding: 0;

  a {
    padding: 10.4px;
    color: var(--theme-button-primary-color);
  }

  // Mobile
  @media screen and (max-width: 640px) {
    margin: 0 0 8px 0;
  }
`;

const Detail = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
  border-bottom: 1px solid lightgray;
  li {
    margin-bottom: 8px;
    font-size: 13px;
  }
  li:not(:last-of-type) {
    margin-right: 16px;
  }
  span {
    margin-right: 5px;
    color: var(--fc-light);
  }

  // Mobile
  @media screen and (max-width: 640px) {
    li {
      font-size: 11px;
    }
  }
`;

export const QuestionHeader = () => {
  let user = useSelector((state) => state.userReducer);
  let question = useSelector((state) => state.questionReducer);

  if (question.createAt) {
    var date = `${question.createAt.slice(0, 10)} ${question.createAt.slice(
      11,
      19
    )}`;
  }

  return (
    <>
      <Title>
        <h1>{question.title}</h1>
        <AskQuestionButton>
          <Link to={user.isLogin ? '/questions/ask' : '/users/login'}>
            Ask Question
          </Link>
        </AskQuestionButton>
      </Title>
      <Detail>
        <li>
          <span>Asked</span>
          {date}
        </li>
      </Detail>
    </>
  );
};
