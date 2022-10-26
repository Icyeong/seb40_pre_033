import styled from 'styled-components';
import { BlueButton } from '../Button/BlueButton';

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0 0 8px 0;
    font-size: 27px;
    color: #3b4045;
  }
`;

const AskQuestionButton = styled(BlueButton)`
  margin-left: 12px;
`;

const Detail = styled.ul`
  display: flex;
  margin-bottom: 16px;
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
    margin-right: 8px;
    color: #6a737c;
  }
`;

export const QuestionHeader = () => {
  return (
    <>
      <Title>
        <h1>질문글 제목</h1>
        <AskQuestionButton>
          <a href="/Questions/ask">Ask Question</a>
        </AskQuestionButton>
      </Title>
      <Detail>
        <li>
          <span>Asked</span>
          today
        </li>
        <li>
          <span>Modified</span>
          today
        </li>
        <li>
          <span>Viewed</span>
          11 times
        </li>
      </Detail>
    </>
  );
};
