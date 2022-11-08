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
  width: 100%;
  border-left-width: 1px;
  padding: 24px;
  margin-right: 24px;

  > h1 {
    font-size: 27px;
    margin-bottom: 24px;
    // Mobile
    @media screen and (max-width: 640px) {
      font-size: 22px;
    }
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
      <Header page2="users" />
      <HeaderMargin />
      <Block>
        <Sidebar page="users" />
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
