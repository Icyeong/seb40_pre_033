import styled from 'styled-components';
import { QuestionHeader } from '../components/Question/QuestionHeader';
import { QuestionTemplate } from '../components/Question/QuestionTemplate';
// import { Answers } from '../components/Answer/Answers';
import { SidebarWidget } from '../components/Home/SidebarWidget/SidebarWidget';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Block } from './HomePage';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Footer } from '../components/Home/Footer/Footer';
import '../components/SummerText/Summernote.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';
// import { useDispatch } from 'react-redux';
// import { getQuestion } from '../redux/actions/questionAction';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const Container = styled.div`
  width: calc(100% - 164px);
  max-width: 1100px;
  padding: 24px;

  > div {
    display: flex;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 24px 16px;
  }
  // Tablet
  @media screen and (max-width: 980px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

const Content = styled.div`
  width: calc(100% - 300px - 24px);
  /* border: 2px solid aquamarine; */

  // Mobile
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  // Tablet
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const QuestionPage = () => {
  // const dispatch = useDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   console.log('GET QUESTION');
  //   dispatch(getQuestion(id));
  // }, []);

  return (
    <>
      <Header />
      <HeaderMargin />
      <Block>
        <Sidebar />
        <Container>
          <QuestionHeader />
          <div>
            <Content>
              <QuestionTemplate />
              <ReactSummernoteLite id="sample" height={300} />
            </Content>
            <aside>
              <section></section>
              <SidebarWidget />
            </aside>
          </div>
        </Container>
      </Block>
      <Footer />
    </>
  );
};
