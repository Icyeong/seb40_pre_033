import styled from 'styled-components';
import { BlueButton } from '../Button/BlueButton';

const Block = styled.div`
  h2 {
    margin-bottom: 19px;
    padding-top: 20px;
    font-size: 19px;
  }

  > div {
    height: 284.333px;
    margin-bottom: 16px;

    background-color: lightgray;
    line-height: 284.333px;
    text-align: center;
  }
`;

const PostAnswerButton = styled(BlueButton)`
  margin: 10px 0 15px 0;
  padding: 10.4px;
`;

export const AnswerWrite = () => {
  return (
    <Block>
      <h2>Your Answer</h2>
      <div>텍스트 에디터</div>
      <PostAnswerButton>Post Your Answer</PostAnswerButton>
    </Block>
  );
};
