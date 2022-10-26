import styled from 'styled-components';
import { AnswersHeader } from './AnswersHeader';
import { QuestionTemplate } from './QuestionTemplate';
import { AnswerWrite } from './AnswerWrite';

const Block = styled.div`
  padding-top: 10px;
`;

export const Answers = () => {
  return (
    <Block>
      <AnswersHeader />
      <QuestionTemplate type="answer" />
      <AnswerWrite />
    </Block>
  );
};
