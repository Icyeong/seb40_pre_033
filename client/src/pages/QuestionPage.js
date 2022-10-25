import styled from 'styled-components';
import { QuestionHeader } from '../components/question/QuestionHeader';
import { Qustion } from '../components/question/Question';
import { Answer } from '../components/question/Answer';
import { CreateAnswer } from '../components/question/CreateAnswer';

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
        <Qustion />
        <Answer />
        <CreateAnswer />
      </Content>
    </Container>
  );
};
