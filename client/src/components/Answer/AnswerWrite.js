import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { addAnswer } from '../../redux/actions/questionAction';
import ReactSummernoteLite from '@easylogic/react-summernote';
import useFetch from '../../hooks/useFetch';

const Block = styled.div`
  h2 {
    margin-bottom: 19px;
    padding-top: 20px;
    font-size: 19px;
  }

  > div {
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
  const { qid } = useParams();

  const [body, setBody] = useState();

  const inputData = { content: body };

  const handleAddAnswer = async () => {
    console.log('ADD ANSWER');

    const res = await useFetch('POST', `/comment/${qid}`, inputData);
    dispatch(addAnswer(res));
  };

  return (
    <Block>
      <h2>Your Answer</h2>
      <ReactSummernoteLite
        id="sample"
        height={300}
        value={body}
        onChange={(e) => {
          console.log(e);
          setBody(e);
        }}
      />
      <PostAnswerButton onClick={handleAddAnswer}>
        Post Your Answer
      </PostAnswerButton>
    </Block>
  );
};
