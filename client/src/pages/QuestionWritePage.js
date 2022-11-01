// import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { BlueButton } from '../components/Common/BlueButton';
import { ButtonWrapper } from './QuestionEditPage';
import '../components/SummerText/Summernote.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';

export const QuestionWritePage = () => {
  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin></HeaderMargin>
        <Wrapper>
          <AsWrapper>
            <AskImg>
              <AskTitle>Ask public Question </AskTitle>
              <AskTop></AskTop>
            </AskImg>
            <MainContents>
              <ContentsUserWrite>
                <Box>
                  <AskText1>Title</AskText1>
                  <AskText2>
                    Be specific and imagine you’re asking a question to another
                    person
                  </AskText2>
                  <TitleInput
                    type="text"
                    className="TitleInput"
                    placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                  />
                </Box>
                <Box>
                  <AskText1>Body</AskText1>
                  <AskText2>
                    Include all the information someone would need to answer
                    your question
                  </AskText2>
                  <ReactSummernoteLite id="sample" height={300} />
                </Box>
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
                <SidebarBox>
                  <Sidebarbox2>
                    <Sidebarwidget>Step 1: Draft your question</Sidebarwidget>
                    <Sidebarwidget>
                      <Sidebarwidget2>
                        The community is here to help you with specific coding,
                        algorithm, or language problems.
                      </Sidebarwidget2>
                      <Sidebarwidget2>
                        Avoid asking opinion-based questions.
                      </Sidebarwidget2>
                      <Sidebarwidget3>Summarize the problems</Sidebarwidget3>
                      <TextList>
                        <li>Include details abot your goal</li>
                        <li>Describe expected and actual results</li>
                        <li>Include any error messages</li>
                      </TextList>
                    </Sidebarwidget>
                  </Sidebarbox2>
                </SidebarBox>
              </ContentsUserHelp>
            </MainContents>
            <ButtonWrapper>
              <BlueButton
              // onClick={클릭 함수 추가구간}
              >
                Post your answer
              </BlueButton>
            </ButtonWrapper>
          </AsWrapper>
        </Wrapper>
      </Top>
      <Footer></Footer>
    </div>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
const Top = styled.div`
  background-color: rgb(242, 242, 243);
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 24px 24px;
`;

export const AsWrapper = styled.div`
  width: 100%;
`;

const AskTop = styled.div`
  width: 600px;
  height: 130.34px;
  background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-repeat: no-repeat;
`;

const AskImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AskTitle = styled.div`
  width: 400px;
  height: 100px;
  font-size: 27px;
  font-weight: 650;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const MainContents = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

export const ContentsUserWrite = styled.div`
  width: 827px;
  padding: 16px 16px 16px 16px;
  /* border: 1px solid red; */
  background-color: #ffffff;
  border-radius: 0.8%;
  box-shadow: 0px 0px 4px #d6d9dc;
`;

export const ContentsUserHelp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0px 0px;
`;

export const AskText2 = styled.div`
  width: 600px;
  height: 100%;
  font-size: 12px;
  /* border: solid pink; */
  display: flex;
  justify-content: left;
  align-items: baseline;
  margin: 0px 0px 10px 0px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 32.57px;
  padding: 8px 10px;
  border: 1px solid var(--bc-darker);
  border-radius: var(--br-sm);
  background-color: white;
  color: var(--fc-dark);
  font-size: 13px;
  &:focus {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    border: none;
    outline: 0;
  }
  border-radius: 2px;
`;

// const TitleInputErr = styled.input`
//   width: 100%;
//   height: 32.57px;
//   padding: 8px 10px;
//   border: 1px solid var(--bc-darker);
//   border-radius: var(--br-sm);
//   background-color: white;
//   color: var(--fc-dark);
//   font-size: 13px;
//   &:focus {
//     box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
//     border: none;
//     outline: 0;
//   }
//   border-radius: 2px;
// `;

export const Box = styled.div``;

export const Userwrite = styled.div`
  font-size: 14px;
`;

export const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
  /* border: solid black 5px; */
`;

const SidebarBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: center;
`;

const Sidebarbox2 = styled.div`
  box-shadow: 0px 0px 4px #d6d9dc;
  height: auto;
`;

const Sidebarwidget = styled.div`
  padding: 15px 15px 15px 20px;
  color: #525060;
  background-color: #f8f9f9;
  font-size: 15px;
  box-shadow: 0px 0px 4px #d6d9dc;
`;
const Sidebarwidget2 = styled.div`
  margin: 0px 0px 10px 0px;
  font-size: 13px;
  /* border: 1px solid pink; */
`;

const TextList = styled.ul`
  margin-top: 15px;
  /* border: 1px solid red; */
  font-size: 13px;
  row-gap: 5px;
  padding: 0px 15px 0px 25px;
  li {
    list-style: disc;
  }
`;

const Sidebarwidget3 = styled.div`
  margin-top: 37px;
  font-weight: bold;
`;
