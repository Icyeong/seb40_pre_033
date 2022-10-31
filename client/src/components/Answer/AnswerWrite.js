import { useState, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { addAnswer } from '../../redux/actions/postAction';

const Block = styled.div`
  h2 {
    margin-bottom: 19px;
    padding-top: 20px;
    font-size: 19px;
  }

  > textarea {
    width: 100%;
    height: 284.333px;
    margin-bottom: 16px;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 16.0769px;
    }
  }
`;

const PostAnswerButton = styled.button`
  padding: 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 13px;
  color: var(--theme-button-primary-color);
  background-color: var(--theme-button-primary-background-color);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

  &:active,
  &:hover,
  &:focus {
    color: var(--theme-button-primary-hover-color);
    background-color: var(--theme-button-primary-hover-background-color);
  }

  &:active {
    background-color: var(
      --theme-button-primary-active-background-color
    ) !important;
  }
`;

export const AnswerWrite = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [answer, setAnswer] = useState();

  const handleAddAnswer = useCallback(() => {
    console.log('ADD ANSWER');
    dispatch(addAnswer(id, answer));
  }, []);

  return (
    <Block>
      <h2>Your Answer</h2>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="텍스트 에디터"
        style={{ resize: 'none' }}
      />
      <PostAnswerButton onClick={handleAddAnswer}>
        Post Your Answer
      </PostAnswerButton>
    </Block>
  );
};
