import { Footer } from '../components/Home/Footer/Footer';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import styled from 'styled-components';
import { PaiginationContainer } from '../components/Users/PaiginationContainer';
import { NewUsers } from '../components/Users/NewUsers';
import { UserContainer } from '../components/Users/UserContainer';
import { Tab } from '../components/Users/Tab';

const Container = styled.div`
  width: calc(100% - 164px);
  max-width: 1100px;
  padding: 24px;

  > h1 {
    font-size: 27px;
    margin-bottom: 24px;
  }

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
export const UsersPage = () => {
  return (
    <>
      <Header />
      <HeaderMargin />
      <Block>
        <Sidebar />
        <Container>
          <h1>Users</h1>
          {/* reducer 이용 시 여기서 namelist 만들어서 props */}
          <Tab />
          {/* reducer 이용 시 여기서 namelist 만들어서 props */}
          <NewUsers />
          <UserContainer />
          <PaiginationContainer />
        </Container>
      </Block>
      <Footer />
    </>
  );
};
