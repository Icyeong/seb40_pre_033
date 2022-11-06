export const GET_QUESTION = 'GET_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const EDIT_ANSWER = 'EDIT_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';

export const VOTE_UP_QUESTION = 'VOTE_UP_QUESTION';
export const VOTE_DOWN_QUESTION = 'VOTE_DOWN_QUESTION';
export const VOTE_UP_ANSWER = 'VOTE_UP_ANSWER';
export const VOTE_DOWN_ANSWER = 'VOTE_DOWN_ANSWER';

export const getQuestion = (res) => {
  // const res = axios.get(`/article/${questionId}`, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: GET_QUESTION,
    payload: res, // 질문 데이터
  };
};

export const addAnswer = (res) => {
  // const res = axios.post(`/comment/${questionId}`, answerData, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: ADD_ANSWER,
    payload: res, // 생성한 답변 데이터
  };
};

export const editAnswer = (res) => {
  // const res = axios.patch(`/comment/${questionId}`, answerData, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: EDIT_ANSWER,
    payload: res, // 수정한 답변 데이터
  };
};

export const deleteAnswer = (res) => {
  // const res = axios.delete(`/comment/${answerId}`, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: DELETE_ANSWER,
    payload: res, // 삭제한 답변 id
  };
};

// 🟢🟢🟢🟢🟢 투표

export const voteUpQuestion = (res) => {
  // const res = axios.get(`/article/${questionId}/like`, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: VOTE_UP_QUESTION,
    payload: res, // 질문 투표 수
  };
};

export const voteDownQuestion = (res) => {
  // const res = axios.get(`/article/${questionId}/dislike`, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: VOTE_DOWN_QUESTION,
    payload: res, // 질문 투표 수
  };
};

export const voteUpAnswer = (res) => {
  // const res = axios.get(`/comment/${answerId}/like`, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: VOTE_UP_ANSWER,
    payload: res, // 답변 데이터 (투표 수 적용)
  };
};

export const voteDownAnswer = (res) => {
  // const res = axios.get(`/comment/${answerId}/dislike`, {
  //   headers: {
  //     Authorization: accessToken,
  //   },
  // });

  return {
    type: VOTE_DOWN_ANSWER,
    payload: res, // 답변 데이터 (투표 수 적용)
  };
};
