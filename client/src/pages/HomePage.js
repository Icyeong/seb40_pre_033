import styled from 'styled-components';
import { QuestionsList } from '../components/questionsList/QuestionsList';
import { Footer } from '../components/Home/Footer/Footer';
import { Header } from '../components/Home/Header/Header';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { SidebarWidget } from '../components/Home/SidebarWidget/SidebarWidget';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';

export const Block = styled.div`
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  a {
    margin: 10px;
  }

  aside {
    float: right;
  }
`;

const HomeSidebarMargin = styled.div`
  width: 204px;
`;

export const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderMargin />
      <Block>
        <Sidebar />
        <HomeSidebarMargin />
        <QuestionsList />
        <aside>
          <section></section>
          <SidebarWidget />
        </aside>
      </Block>
      <Footer />
    </div>
  );
};
