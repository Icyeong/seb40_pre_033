import styled from 'styled-components';
import { AnswerComments } from './AnswerComments';
import { QuestionContent } from './QuestionContent';
import { QuestionLeftBar } from './QuestionLeftBar';

const Block = styled.div`
  padding: ${(props) => props.type === 'answer' && '16px 0'};

  > div {
    display: flex;
  }

  a {
    padding: 0 3px 2px 3px;
    font-size: 13px;
    color: #838c95;

    &:active,
    &:hover {
      color: #0a95ff;
    }
  }
`;

export const QuestionTemplate = (type) => {
  return (
    <Block type={type.type}>
      <div>
        <QuestionLeftBar />
        <QuestionContent type={type.type} />
      </div>
      {type.type === 'answer' && <AnswerComments />}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Add a comment</a>
    </Block>
  );
};
