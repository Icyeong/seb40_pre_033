import { useState } from 'react';
import styled from 'styled-components';
import askImg from '../assets/images/background.svg';

export const QuestionWritePage = () => {
  //질문 작성 공간 글 하단에 똑같이 보여지는 기능
  const [useWrite, setUseWrite] = useState('');
  const userWriteFunction = (e) => {
    setUseWrite(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Wrapper>
      <AsWrapper>
        <AskTop>
          <AskTitle>Ask public Question</AskTitle>
          <AskImg />
        </AskTop>
        <MainContents>
          <ContentsUserWrite>
            <div>
              <TextboxMargin>
                <AskText1>Title</AskText1>
                <AskText2>
                  Be specific and imagine you’re asking a question to another
                  person
                </AskText2>
              </TextboxMargin>
              <TitleInput
                type="text"
                className="TitleInput"
                placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                onChange={(e) => userWriteFunction(e)}
              />
            </div>
            <div>
              <TextboxMargin>
                <AskText1>Body</AskText1>
                <AskText2>
                  Include all the information someone would need to answer your
                  question
                </AskText2>
              </TextboxMargin>
              <SummerNotePreview>써머노트 텍스트박스 구간</SummerNotePreview>
              <div>텍스트박스 밑 버튼?</div>
            </div>
            <Userwrite>{useWrite}</Userwrite>
            <div>
              <TextboxMargin>
                <AskText1>Tags</AskText1>
                <AskText2>
                  Add up to 5 tags to describe what your question is about
                </AskText2>
              </TextboxMargin>
              <TitleInput
                type="text"
                className="TitleInput"
                placeholder="e.g (c linux r)"
                // onChange={(e) => userWriteFunction(e)}
              />
            </div>
          </ContentsUserWrite>
          <ContentsUserHelp>
            <div>
              <Sidebarwidget>Step 1: Draft your question</Sidebarwidget>
              <Sidebarbox>
                <Sidebarwidget2>
                  The community is here to help you with specific coding,
                  algorithm, or language problems.
                </Sidebarwidget2>
                <Sidebarwidget2>
                  Avoid asking opinion-based questions.
                </Sidebarwidget2>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </Sidebarbox>
            </div>
            <div>
              <Sidebarwidget>Have a non-programming question?</Sidebarwidget>
              <div></div>
            </div>
            <div>
              <Sidebarwidget>More helpful links</Sidebarwidget>
              <div></div>
            </div>
          </ContentsUserHelp>
        </MainContents>
        <Reviewbutton>Review your question</Reviewbutton>
      </AsWrapper>
    </Wrapper>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 3px solid red;
  display: flex;
  justify-content: center;
  background-color: rgb(242, 242, 243);
  padding: 0px 24px 24px 24px;
`;

const AsWrapper = styled.div`
  width: 85%;
  height: 100vh;
  /* border: 5px solid blue; */
`;

const AskTop = styled.div`
  height: 130px;
  /* border: 3px solid yellowgreen; */
  display: flex;
  justify-content: space-between;
`;

const AskTitle = styled.div`
  width: 400px;
  height: 100%;
  font-size: 27px;
  font-weight: bold;
  /* border: solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AskImg = styled.img`
  background-image: url('${askImg}');
  background-repeat: no-repeat;
  width: 550px;
  height: 100%;
`;

const MainContents = styled.div`
  width: 100%;
  height: 600px;
  /* border: 5px solid red; */
  display: flex;
  justify-content: space-between;
`;

const ContentsUserWrite = styled.div`
  width: 70%;
  height: 100%;
  padding: 16px 16px 16px 16px;
  border: 1px solid #d6d9dc;
  background-color: #ffffff;
  border-radius: 1%;
  box-shadow: 2px 2px 6px #d6d9dc;
`;

const ContentsUserHelp = styled.div`
  width: 340px;
  height: 744px;
  /* border: 4px solid black; */
  display: flex;
  flex-direction: column;
`;

const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  /* border: solid blue; */
  display: flex;
  justify-content: left;
  align-items: baseline;
`;

const AskText2 = styled.div`
  width: 600px;
  height: 100%;
  font-size: 12px;
  /* border: solid pink; */
  display: flex;
  justify-content: left;
  align-items: baseline;
  margin: 0px 0px 13px 0px;
`;
const TitleInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 32.57px;
  padding: 0.6em 0.7em;
  border: 1px solid var(--bc-darker);
  border-radius: var(--br-sm);
  background-color: var(--white);
  color: var(--fc-dark);
  font-size: 13px;
`;

const Sidebarbox = styled.div`
  padding: 16px 15px 0px 15px;
  background-color: white;
`;

const Sidebarwidget = styled.div`
  padding: 12px 15px 12px 15px;
  color: #525060;
  background-color: #f8f9f9;
  font-size: 15px;
`;

const Sidebarwidget2 = styled.div`
  padding: 4px 15px 0px 15px;
  font-size: 13px;
`;

const Reviewbutton = styled.button`
  width: 154px;
  height: 40px;
  background-color: #0a95ff;
  border: solid #0a95ff;
  font-size: 14px;
  margin: 32px -2px 0px -2px;
`;

const Userwrite = styled.div`
  font-size: 14px;
`;

const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
  border: solid black 5px;
`;

const TextboxMargin = styled.div`
  margin: 4px;
`;
