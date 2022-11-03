import styled from 'styled-components';
import { QuestionsList } from '../components/questionsList/QuestionsList';
import { Footer } from '../components/Home/Footer/Footer';
import { Header } from '../components/Home/Header/Header';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { SidebarWidget } from '../components/Home/SidebarWidget/SidebarWidget';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../redux/actions/questionsAction';

export const Block = styled.div`
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  aside {
    float: right;
  }
`;

const HomeSidebarMargin = styled.div`
  /* width: 204px; */
`;

export const HomePage = () => {
  const dispatch = useDispatch();

  const initPage = 1;
  const initSize = 10;

  useEffect(async () => {
    console.log('GET QUESTIONS');

    const res = await useFetch(
      'GET',
      `/articles?page=${initPage}&size=${initSize}`
    );
    dispatch(getQuestions(res));
  }, []);

  return (
    <div>
      <Header />
      <HeaderMargin />
      <Block>
        <Sidebar />
        <HomeSidebarMargin />
        <QuestionsList />
        <aside>
          <SidebarWidget />
        </aside>
      </Block>
      <Footer />
    </div>
  );
};
