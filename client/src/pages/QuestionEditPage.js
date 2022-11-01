// import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import { BlueButton } from '../components/Common/BlueButton';
import { CancelButton } from '../components/Common/CancelButton';
import '../components/SummerText/Summernote.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';
import {
  AskText1,
  AsWrapper,
  Box,
  ContentsUserHelp,
  ContentsUserWrite,
  MainContents,
  // SummerNotePreview,
  TitleInput,
  Wrapper,
} from './QuestionWritePage';

export const QuestionEditPage = () => {
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
                    <TitleInput
                      type="text"
                      className="TitleInput"
                      placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                    />
                  </Box>
                  <Box>
                    <AskText1>Body</AskText1>
                    <ReactSummernoteLite id="sample" height={350} />
                  </Box>
                  <Box>
                    <AskText1>Tags</AskText1>
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
