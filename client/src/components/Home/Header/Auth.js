import { NavLink } from './style';

export const Auth = () => {
  return (
    <>
      <NavLink to="/users/login" className="button-login">
        Log in
      </NavLink>
      <NavLink to="/users/signup" className="button-signup">
        Sign up
      </NavLink>
    </>
  );
};
