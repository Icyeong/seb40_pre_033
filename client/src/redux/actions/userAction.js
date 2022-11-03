export const GET_MYINFO = 'GET_MYINFO';

export const getmyInfo = (res) => {
  return {
    type: GET_MYINFO,
    payload: res,
  };
};
