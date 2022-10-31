import useFetch from '../../hooks/useFetch';

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (userData) => {
  const res = useFetch('post', '/auth/signup', userData);

  return {
    type: REGISTER_USER,
    payload: res,
  };
};
