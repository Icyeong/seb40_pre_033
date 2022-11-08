import ReactSummernoteLite from '@easylogic/react-summernote';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HasErrorSvg } from '../../assets/images/LoginSvg';
import useFetch from '../../hooks/useFetch';
import { editAnswer } from '../../redux/actions/questionAction';
import { BlueButton } from '../Common/BlueButton';
import { CancelButton } from '../Common/CancelButton';
import { ButtonWrapper } from '../QuestioEdit/EditStyle';
import { ErrorMessage } from '../Question/ErrorMessage';
import {
  AskText1,
  AskTitle,
  AsWrapper,
  Box,
  ContentsUserHelp,
  ContentsUserWrite,
  SummerNoteWrapper,
} from '../WriteEdit/style';
import { BodyErrorIcon, MainContents } from './AnswerEditStyle';
import { AnswerWidget } from './AnswerWidget';

export const AnswerEditMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bodyRef = useRef();

  const { qid, aid } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const [body, setBody] = useState('');
  const [bodyError, setBodyError] = useState(false);

  const answer = question.comments.filter(
    (answer) => answer.comment_id == aid
  )[0];

  const inputData = { content: body };

  useEffect(() => {
    bodyRef.current.querySelector('.note-editable').innerHTML = answer.content;
  }, []);

  const handleEditAnswer = async () => {
    setBodyError(false);

    bodyRef.current.classList.remove('error');

    if (body.length < 30) {
      setBodyError(true);
      bodyRef.current.classList.add('error');
    } else {
      const res = await useFetch('PATCH', `/comment/${qid}`, inputData);
      dispatch(editAnswer(res));

      navigate(`/article/${qid}`);

      // console.log('EDIT ANSWER', res);
    }
  };

  return (
    <AsWrapper>
      <AskTitle>
        <p>Your edit will be placed in a queue until it is peer reviewed.</p>
        <p>
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.
        </p>
      </AskTitle>
      <MainContents>
        <ContentsUserWrite>
          <Box>
            <AskText1>Body</AskText1>
            <SummerNoteWrapper ref={bodyRef}>
              <ReactSummernoteLite
                id="sample"
                height={300}
                onBlur={() => {
                  setBody(
                    bodyRef.current.querySelector('.note-editable').innerHTML
                  );
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
          </Box>
        </ContentsUserWrite>
        <ContentsUserHelp>
          <AnswerWidget />
        </ContentsUserHelp>
      </MainContents>
      <ButtonWrapper>
        <BlueButton onClick={handleEditAnswer}>Save Edits</BlueButton>
        <CancelButton>
          <Link to={`/questions/${qid}`}>Cancel</Link>
        </CancelButton>
      </ButtonWrapper>
    </AsWrapper>
  );
};
