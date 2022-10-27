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
        <a href="/questions/1">상세글 페이지로 이동</a>
        <a href="/questions/ask">질문글 작성 페이지로 이동</a>
        <a href="/questions/edit/1">질문글 수정 페이지로 이동</a>
        <aside>
          <section></section>
          <SidebarWidget />
        </aside>
      </Block>
      <Footer />
    </div>
  );
};
