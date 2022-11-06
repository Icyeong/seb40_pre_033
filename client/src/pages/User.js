import { UserWrapper } from '../assets/styles/UserStyle';
import { Footer } from '../components/Home/Footer/Footer';
import { Header } from '../components/Home/Header/Header';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Main } from '../components/Users/Main';

const User = () => {
  return (
    <>
      <Header />
      <UserWrapper>
        <Sidebar />
        <Main />
      </UserWrapper>
      <Footer />
    </>
  );
};

export default User;
