import styled from 'styled-components';

import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
// import LabTest from '../components/SummerNote/SummerText/LabTest';
import { Block } from './HomePage';
import { BlueButton } from '../components/Common/BlueButton';
import { CancelButton } from '../components/Common/CancelButton';
import { Top, AskTitle, ButtonWrapper } from './QuestionEditPage';
import {
  AskText1,
  AsWrapper,
  Box,
  ContentsUserHelp,
  ContentsUserWrite,
  SummerNotePreview,
  Wrapper,
} from './QuestionWritePage';

//써머노트 install 명령어 "npm install summernote"

const MainContents = styled.div`
  width: 100%;
  /* height: 650px; */
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

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
                      <textarea placeholder="텍스트 에디터" />
                      {/* <LabTest /> */}
                    </SummerNotePreview>
                  </Box>
                </ContentsUserWrite>
                <ContentsUserHelp>
                  <EditWidget />
                </ContentsUserHelp>
              </MainContents>
              <ButtonWrapper>
                <BlueButton>Save Edits</BlueButton>
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
