// import { useState } from 'react';
// import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import LabTest from '../components/SummerNote/SummerText/LabTest';
import { Block } from './HomePage';
import {
  Top,
  Wrapper,
  AskText1,
  AsWrapper,
  AskTitle,
  MainContents,
  ContentsUserWrite,
  Box,
  SummerNotePreview,
  ContentsUserHelp,
  Reviewbutton,
  Reviewbutton2,
} from './QuestionEditPage';
// import styled from 'styled-components';
//써머노트 install 명령어 "npm install summernote"

export const AnswerEdit = () => {
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
                    <SummerNotePreview>
                      <LabTest />
                    </SummerNotePreview>
                  </Box>
                </ContentsUserWrite>
                <ContentsUserHelp>
                  <EditWidget />
                </ContentsUserHelp>
              </MainContents>
              <Reviewbutton>Save Edits</Reviewbutton>
              <Reviewbutton2>Cancel</Reviewbutton2>
            </AsWrapper>
          </Wrapper>
        </Block>
      </Top>
      <Footer></Footer>
    </div>
  );
};
