import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import styled from 'styled-components';
import { TagsHeader } from '../components/Tags/TagsHeader';

const Container = styled.div`
  width: calc(100% - 164px);
  max-width: 1100px;
  padding: 24px;

  > div {
    display: flex;
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
        </Container>
      </Block>
    </>
  );
};
