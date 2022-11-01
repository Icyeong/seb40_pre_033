import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import { BlueButton } from '../components/Common/BlueButton';
import { CancelButton } from '../components/Common/CancelButton';
import {
  AskText1,
  AskText2,
  AsWrapper,
  Box,
  ContentsUserHelp,
  ContentsUserWrite,
  MainContents,
  SummerNotePreview,
  TitleInput,
  Userwrite,
  Wrapper,
} from './QuestionWritePage';
import { useDispatch, useSelector } from 'react-redux';
import { editQuestion } from '../redux/actions/questionsAction';
import { useParams } from 'react-router-dom';

//써머노트 install 명령어 "npm install summernote"

export const QuestionEditPage = () => {
  const dispatch = useDispatch();
  const { qid } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const [title, setTitle] = useState(question.title);
  const [body, setBody] = useState(question.content);
  // const [tags, setTags] = useState(question.tags);

  const inputData = { title, body };

  const handleEditQuestion = () => {
    console.log('ADD QUESTION');
    console.log(inputData);
    dispatch(editQuestion(qid, inputData));
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
                    <AskText1>Title</AskText1>
                    <AskText2>
                      Be specific and imagine you’re asking a question to person
                    </AskText2>
                    <TitleInput
                      type="text"
                      className="TitleInput"
                      placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Box>
                  <Box>
                    <AskText1>Body</AskText1>
                    <AskText2>
                      Include all the information someone would need to answer
                      your question
                    </AskText2>
                    <SummerNotePreview>
                      <textarea
                        placeholder="텍스트 에디터"
                        value={body}
                        onChange={(e) => {
                          setBody(e.target.value);
                        }}
                      />
                      {/* <LabTest /> */}
                    </SummerNotePreview>
                  </Box>
                  <Userwrite>
                    질문 작성 공간 글 하단에 똑같이 보여지는 기능
                  </Userwrite>
                  <Box>
                    <AskText1>Tags</AskText1>
                    <AskText2>
                      Add up to 5 tags to describe what your question is about
                    </AskText2>
                    <TitleInput
                      type="text"
                      className="TitleInput"
                      placeholder="e.g (c linux r)"
                    />
                  </Box>
                </ContentsUserWrite>
                <ContentsUserHelp>
                  <EditWidget />
                </ContentsUserHelp>
              </MainContents>
              <ButtonWrapper>
                <BlueButton onClick={handleEditQuestion}>Save Edits</BlueButton>
                <CancelButton>Cancel</CancelButton>
              </ButtonWrapper>
            </AsWrapper>
          </Wrapper>
        </Block>
      </Top>
      <Footer></Footer>
    </div>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
export const Top = styled.div`
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
`;

export const AskTitle = styled.div`
  border: 1px solid red;
  width: 827px;
  height: 119px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 16px;
  color: rgb(59, 64, 69);
  background-color: rgb(253, 247, 226);
  border: 1px solid rgb(230, 207, 121);
  border-radius: 3px;
  font-size: 13px;
  line-height: 17px;
`;

export const ButtonWrapper = styled.div`
  padding: 12px 0 16px 0;
`;
