import styled from 'styled-components';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import '../components/SummerText/Summernote.css';
import 'jquery';
import { Header } from '../components/Home/Header/Header';
import { EditMain } from '../components/QuestioEdit/EditMain';

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
  @media screen and (max-width: 980px) {
    font-size: 22px;
  }
`;

export const QuestionEditPage = () => {
  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin />
        <Block>
          <Sidebar />
          <EditMain />
        </Block>
      </Top>
      <Footer></Footer>
    </div>
  );
};
