import styled from 'styled-components';
import { QuestionContent } from './QuestionContent';
import { QuestionLeftBar } from './QuestionLeftBar';

const Block = styled.div`
  display: flex;
`;

export const Question = () => {
  return (
    <Block>
      <QuestionLeftBar />
      <QuestionContent />
    </Block>
  );
};
