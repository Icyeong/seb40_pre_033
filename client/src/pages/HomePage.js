import styled from 'styled-components';
import { QuestionsList } from '../components/questionsList/QuestionsList';
import { Footer } from '../components/Home/Footer/Footer';
import { Header } from '../components/Home/Header/Header';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { SidebarWidget } from '../components/Home/SidebarWidget/SidebarWidget';

const Block = styled.div`
  display: flex;

  a {
    margin: 10px;
  }

  aside {
    float: right;
  }
`;

export const HomePage = () => {
  return (
    <div>
      <Block>
        <Header />
        <Sidebar />
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
