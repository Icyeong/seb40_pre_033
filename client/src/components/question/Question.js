import styled from 'styled-components';
import { QustionContent } from './QustionContent';
import { QuestionLeftBar } from './QustionLeftBar';

const Block = styled.div`
  display: flex;
`;

export const Qustion = () => {
  return (
    <Block>
      <QuestionLeftBar />
      <QustionContent />
    </Block>
  );
};
