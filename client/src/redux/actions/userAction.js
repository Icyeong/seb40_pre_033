import axios from 'axios';
// import useFetch from '../../hooks/useFetch';

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = () => {
  // const res = useFetch('post', '/auth/signup', userData);
  // console.log(res);
  // return {
  //   type: REGISTER_USER,
  //   payload: res,
  // };

  // const requestOptions = {
  //   Headers: {
  //     'Content-Type': 'application/json',
  //     'ngrok-skip-browser-warning': 'any value',
  //   },
  //   Body: JSON.stringify(userData),
  // };

  // try {
  //   const response = fetch(`/auth/signup`, requestOptions)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  //   return {
  //     type: REGISTER_USER,
  //     payload: response.data,
  //   };
  // } catch (err) {
  //   throw new Error('err2');
  // }

  try {
    const res = axios.get('/users').then((res) => console.log(res));
    // const res = axios
    //   .post(`/auth/signup`, requestOptions)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(res);
    return {
      type: REGISTER_USER,
      payload: res.data,
    };
  } catch (err) {
    throw new Error('err 발생');
  }
};
