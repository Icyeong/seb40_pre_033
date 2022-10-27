import styled from 'styled-components';
import { BlueButton } from '../Common/BlueButton';

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

  // Mobile
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 16.0769px;
    }
  }
`;

const PostAnswerButton = styled(BlueButton)`
  padding: 10px 0 15px 0;
`;

export const AnswerWrite = () => {
  return (
    <Block>
      <h2>Your Answer</h2>
      <div>텍스트 에디터</div>
      <PostAnswerButton>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Post Your Answer</a>
      </PostAnswerButton>
    </Block>
  );
};
