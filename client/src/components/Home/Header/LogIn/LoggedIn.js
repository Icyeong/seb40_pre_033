import { UserInfo } from './UserInfo';

export const LoggedIn = ({ user }) => {
  // let { email } = useSelector((state) => state.userReducer);
  return (
    <>
      <UserInfo user={user} />
    </>
  );
};
