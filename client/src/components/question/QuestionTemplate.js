import styled from 'styled-components';
import { AnswerComments } from './AnswerComments';
import { QuestionContent } from './QuestionContent';
import { QuestionLeftBar } from './QuestionLeftBar';

const LiBlock = styled.li`
  padding: ${(props) => props.type === 'answer' && '16px 0'};
  border-bottom: 1px solid hsl(201, 8%, 90%);

  > div {
    display: flex;
  }

  a {
    margin-left: 52px;
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
    <LiBlock type={type.type}>
      <div>
        <QuestionLeftBar />
        <QuestionContent type={type.type} />
      </div>
      {type.type === 'answer' && <AnswerComments />}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Add a comment</a>
    </LiBlock>
  );
};
