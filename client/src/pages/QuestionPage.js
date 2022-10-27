import styled from 'styled-components';
import { QuestionHeader } from '../components/question/QuestionHeader';
import { QuestionTemplate } from '../components/question/QuestionTemplate';
import { Answers } from '../components/question/Answers';

const Container = styled.div`
  width: calc(100% - 164px);
  max-width: 1100px;
  padding: 24px;

  // Mobile
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 24px 16px;
  }
  // Tablet
  @media screen and (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const Content = styled.div`
  width: calc(100% - 300px - 24px);
  border: 2px solid aquamarine;

  // Mobile
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  // Tablet
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const QuestionPage = () => {
  return (
    <Container>
      <QuestionHeader />
      <Content>
        <QuestionTemplate type="question" />
        <Answers />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      </Content>
    </Container>
  );
};
