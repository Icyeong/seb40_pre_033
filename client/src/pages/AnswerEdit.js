import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import { Top } from './QuestionEditPage';
import { Wrapper } from './QuestionWritePage';
import { AnswerEditMain } from '../components/AnswerEdit/AnswerEditMain';

export const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 15px 0px 10px 0;
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
            <AnswerEditMain />
          </Wrapper>
        </Block>
      </Top>
      <Footer></Footer>
    </div>
  );
};
