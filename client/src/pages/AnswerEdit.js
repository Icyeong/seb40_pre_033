import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import { BlueButton } from '../components/Common/BlueButton';
import { CancelButton } from '../components/Common/CancelButton';
import { Top, AskTitle, ButtonWrapper } from './QuestionEditPage';
import {
  AsWrapper,
  Box,
  ContentsUserHelp,
  ContentsUserWrite,
  SummerNoteWrapper,
  Wrapper,
} from './QuestionWritePage';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactSummernoteLite from '@easylogic/react-summernote';
import useFetch from '../hooks/useFetch';
import { useState, useRef, useEffect } from 'react';
import { ErrorMessage } from '../components/Question/ErrorMessage';
import { HasErrorSvg } from '../assets/images/LoginSvg';
import { editAnswer } from '../redux/actions/questionAction';

const MainContents = styled.div`
  width: 100%;
  height: 511px;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

export const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 15px 0px 10px 0;
`;

export const AnswerEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bodyRef = useRef();

  const { qid, aid } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const [body, setBody] = useState('');
  const [textBody, setTextBody] = useState();
  const [bodyError, setBodyError] = useState(false);

  const answer = question.comments.filter(
    (answer) => answer.comment_id == aid
  )[0];

  const inputData = { content: body };

  useEffect(() => {
    bodyRef.current.querySelector('.note-editable').innerHTML = answer.content;
  }, []);

  useEffect(() => {
    console.log('#2', bodyRef.current.querySelector('.note-editable'));
  });

  const handleEditAnswer = async () => {
    setBodyError(false);

    bodyRef.current.classList.remove('error');

    if (textBody.length < 30) {
      setBodyError(true);
      bodyRef.current.classList.add('error');
    } else {
      console.log('EDIT ANSWER');
      console.log(inputData);

      const res = await useFetch('PATCH', `/comment/${qid}`, inputData);
      dispatch(editAnswer(res));

      navigate(`/article/${qid}`);
    }
  };

  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin />
        <Block>
          <Sidebar />
          <Wrapper>
            <AsWrapper>
              <AskTitle>
                <p>
                  Your edit will be placed in a queue until it is peer reviewed.
                </p>
                <p>
                  We welcome edits that make the post easier to understand and
                  more valuable for readers. Because community members review
                  edits, please try to make the post substantially better than
                  how you found it, for example, by fixing grammar or adding
                  additional resources and hyperlinks.
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
                            bodyRef.current.querySelector('.note-editable')
                              .innerHTML
                          );
                          setTextBody(
                            bodyRef.current.querySelector('.note-editable')
                              .innerText
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
                  <EditWidget />
                </ContentsUserHelp>
              </MainContents>
              <ButtonWrapper>
                <BlueButton onClick={handleEditAnswer}>Save Edits</BlueButton>
                <CancelButton>
                  <Link to={`/questions/${qid}`}>Cancel</Link>
                </CancelButton>
              </ButtonWrapper>
            </AsWrapper>
          </Wrapper>
        </Block>
      </Top>
      <Footer></Footer>
    </div>
  );
};

const BodyErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 214px;
`;
