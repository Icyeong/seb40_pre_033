import { useState } from 'react';
import styled from 'styled-components';

//써머노트 install 명령어 "npm install summernote"

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
              />
            </div>
          </ContentsUserWrite>
          <ContentsUserHelp>
            <SidebarBox>
              <Sidebarwidget>Step 1: Draft your question</Sidebarwidget>
              <Sidebarbox>
                <Sidebarwidget2>
                  The community is here to help you with specific coding,
                  algorithm, or language problems.
                </Sidebarwidget2>
                <Sidebarwidget2>
                  Avoid asking opinion-based questions.
                </Sidebarwidget2>
                <SidebarboxInside>1. Summarize the problems</SidebarboxInside>
                <li></li>
                <SidebarboxInside>
                  2. Describe what you`ve tried
                </SidebarboxInside>
                <SidebarboxInside>3. Show some code</SidebarboxInside>
              </Sidebarbox>
            </SidebarBox>
          </ContentsUserHelp>
        </MainContents>
        <Reviewbutton
        // onClick={클릭 함수 추가구간}
        >
          Post your answer
        </Reviewbutton>
      </AsWrapper>
    </Wrapper>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 3px solid red; */
  display: flex;
  justify-content: center;
  background-color: rgb(242, 242, 243);
  padding: 0px 24px 24px 24px;
`;

const AsWrapper = styled.div`
  width: 85%;
  /* border: 5px solid blue; */
`;

const AskTop = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid yellowgreen;
  background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  justify-items: ;
`;

const AskTitle = styled.div`
  width: 400px;
  height: 100%;
  font-size: 27px;
  font-weight: 650;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: solid blue; */
`;

const AskImg = styled.img`
  background-repeat: no-repeat;
  width: 550px;
  height: 100%;
  /* border: 0; */
`;

const MainContents = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

const ContentsUserWrite = styled.div`
  width: 70%;
  height: 100%;
  padding: 16px 16px 16px 16px;
  /* border: 1px solid #d6d9dc; */
  background-color: #ffffff;
  /* border-radius: 1%; */
  box-shadow: 0px 0px 4px #d6d9dc;
`;

const ContentsUserHelp = styled.div`
  width: 340px;
  height: 100vh;
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
  width: 100%;
  height: 32.57px;
  padding: 0.6em 0.7em;
  /* border: 1px solid var(--bc-darker); */
  /* border-radius: var(--br-sm); */
  background-color: white;
  color: var(--fc-dark);
  font-size: 13px;
  &:focus {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    /* border: none; */
    outline: 0;
  }
  /* border-radius: 2px; */
`;

const Reviewbutton = styled.button`
  width: 154px;
  height: 40px;
  background-color: #0a95ff;
  /* border: solid #0a95ff; */
  font-size: 14px;
  margin: 32px -2px 0px -2px;
  color: white;
  /* border-radius: 4px; */
  box-shadow: 0px 0px 2px 2px rgba(107, 186, 247, 0.5);
`;

const Userwrite = styled.div`
  font-size: 14px;
`;

const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
  /* border: solid black 5px; */
`;

const TextboxMargin = styled.div`
  margin: 7px;
`;

const SidebarBox = styled.div`
  margin: 0px 0px 7px 0px;
  width: 290px;
  height: 700px;
`;

const Sidebarbox = styled.div`
  padding: 15px 15px 15px 15px;
  background-color: white;
  box-shadow: 0px 0px 4px #d6d9dc;
  height: auto;
`;

const Sidebarwidget = styled.div`
  padding: 12px 15px 12px 15px;
  color: #525060;
  background-color: #f8f9f9;
  font-size: 15px;
  box-shadow: 0px 0px 4px #d6d9dc;
`;

const Sidebarwidget2 = styled.div`
  margin: 0px 0px 20px 0px;
  font-size: 13px;
`;

const SidebarboxInside = styled.div`
  margin: 0px 0px 10px 0px;
  font-size: 15px;
`;
