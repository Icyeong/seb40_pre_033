import styled from 'styled-components';
import { QuestionHeader } from '../components/question/QuestionHeader';
import { Question } from '../components/question/Question';
import { Answer } from '../components/question/Answer';
import { AnswerWrite } from '../components/question/AnswerWrite';

const Container = styled.div`
  padding: 24px;
  width: calc(100% - 164px);
  max-width: 1100px;
`;

const Content = styled.div`
  width: calc(100% - 300px - 24px);
  border: 2px solid aquamarine;
`;

export const QuestionPage = () => {
  return (
    <Container>
      <QuestionHeader />
      <Content>
        <Question />
        <Answer />
        <AnswerWrite />
      </Content>
    </Container>
  );
};
