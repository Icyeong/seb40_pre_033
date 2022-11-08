import styled from 'styled-components';
import { QuestionsList } from '../components/questionsList/QuestionsList';
import { Footer } from '../components/Home/Footer/Footer';
import { Header } from '../components/Home/Header/Header';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { SidebarWidget } from '../components/Home/SidebarWidget/SidebarWidget';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../redux/actions/questionsAction';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Common/Loading';

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

const HomeSidebarMargin = styled.div``;

export const HomePage = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const initPage = 1;
  const initSize = 10;

  const load = async () => {
    setIsLoading(true);

    // 질문 리스트 가져오기
    const res = await useFetch(
      'GET',
      `/articles?page=${initPage}&size=${initSize}`
    ).finally(() => {
      setIsLoading(false);
    });
    // console.log('GET QUESTIONS', res);
    dispatch(getQuestions(res));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div>
        <Header />
        <HeaderMargin />
        <Block>
          <Sidebar page="home" />
          <HomeSidebarMargin />
          <QuestionsList />
          <aside>
            <SidebarWidget />
          </aside>
        </Block>
        <Footer />
      </div>
      {isLoading && <Loading />}
    </>
  );
};
