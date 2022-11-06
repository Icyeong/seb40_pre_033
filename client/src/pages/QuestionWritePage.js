import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import '../components/SummerText/Summernote.css';
import 'jquery';
import { Main } from '../components/WriteEdit/Main';

const Top = styled.div`
  background-color: rgb(242, 242, 243);
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;

  // Mobile
  @media screen and (max-width: 640px) {
    > h2 {
      font-size: 14.3846px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 24px 24px;

  // Mobile
  @media screen and (max-width: 640px) {
    > h2 {
      font-size: 14.3846px;
    }
  }
`;

export const QuestionWritePage = () => {
  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin></HeaderMargin>
        <Main />
      </Top>
      <Footer></Footer>
    </div>
  );
};
