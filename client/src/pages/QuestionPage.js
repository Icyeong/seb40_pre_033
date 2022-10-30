import styled from 'styled-components';
import { QuestionHeader } from '../components/Question/QuestionHeader';
import { QuestionTemplate } from '../components/Question/QuestionTemplate';
import { Answers } from '../components/Answer/Answers';
import { useDispatch } from 'react-redux';
import { getQuestion } from '../redux/actions/questionAction';
import { useEffect } from 'react';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  return (
    <Container>
      <QuestionHeader />
      <Content>
        <QuestionTemplate />
        <Answers />
      </Content>
    </Container>
  );
};
