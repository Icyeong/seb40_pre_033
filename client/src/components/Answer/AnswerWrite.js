import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { addAnswer } from '../../redux/actions/questionAction';
import ReactSummernoteLite from '@easylogic/react-summernote';
import useFetch from '../../hooks/useFetch';
import { BodyErrorIcon, SummerNoteWrapper } from '../WriteEdit/style';
import { ErrorMessage } from '../Question/ErrorMessage';
import { HasErrorSvg } from '../../assets/images/LoginSvg';

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

export const PostAnswerButton = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 13px;
  color: var(--theme-button-primary-color);
  background-color: var(--theme-button-primary-background-color);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  padding: 10.4px;
  margin-bottom: 25px;
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

  const bodyRef = useRef();

  const [body, setBody] = useState();
  const [textBody, setTextBody] = useState();

  const [bodyError, setBodyError] = useState(false);

  const inputData = { content: body };

  const handleAddAnswer = async () => {
    setBodyError(false);

    bodyRef.current.classList.remove('error');

    // 유효성 검사
    if (textBody.length < 30) {
      setBodyError(true);
      bodyRef.current.classList.add('error');
    } else {
      const res = await useFetch('POST', `/comment/${qid}`, inputData);
      dispatch(addAnswer(res));

      console.log('ADD ANSWER', res);

      bodyRef.current.querySelector('.note-editable').innerHTML = '';

      // window.location.reload();
    }
  };

  return (
    <Block>
      <h2>Your Answer</h2>
      <SummerNoteWrapper ref={bodyRef}>
        <ReactSummernoteLite
          id="sample"
          height={300}
          onBlur={() => {
            setBody(bodyRef.current.querySelector('.note-editable').innerHTML);
            setTextBody(
              bodyRef.current.querySelector('.note-editable').innerText
            );
            bodyRef.current.style = '';
          }}
          onFocus={() => {
            bodyRef.current.style =
              'box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5); border: none; outline: 0;';
          }}
        />
      </SummerNoteWrapper>
      {bodyError && (
        <>
          <ErrorMessage text="Body must be at least 30 characters." />
          <BodyErrorIcon>
            <HasErrorSvg />
          </BodyErrorIcon>
        </>
      )}
      <PostAnswerButton onClick={handleAddAnswer}>
        Post Your Answer
      </PostAnswerButton>
    </Block>
  );
};
