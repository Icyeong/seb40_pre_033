import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import { TagsHeader } from '../components/Tags/TagsHeader';
import { Footer } from '../components/Home/Footer/Footer';
import { TagsSection } from '../components/Tags/TagsSection';
import { TagsTab } from '../components/Tags/TagsTab';
import { TagsPagination } from '../components/Tags/TagsPagination';

const Container = styled.div`
  width: 100%;
  border-left-width: 1px;
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

export const TagsPage = () => {
  return (
    <>
      <Header />
      <HeaderMargin />
      <Block>
        <Sidebar />
        <Container>
          <TagsHeader />
          <TagsTab />
          <TagsSection />
          <TagsPagination />
        </Container>
      </Block>
      <Footer />
    </>
  );
};
