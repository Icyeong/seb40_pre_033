import styled from 'styled-components';
import { Footer } from '../components/shared/Footer/Footer';
import { Header } from '../components/shared/Header/Header';
import { Sidebar } from '../components/shared/Sidebar/Sidebar';
import { SidebarWidget } from '../components/shared/SidebarWidget/SidebarWidget';

const Block = styled.div`
  display: flex;
  /* flex-direction: column;
  text-align: center; */

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
        <aside>
          <section></section>
          <SidebarWidget />
        </aside>
      </Block>
      <Footer />
    </div>
  );
};
