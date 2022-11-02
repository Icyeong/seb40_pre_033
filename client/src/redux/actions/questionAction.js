import axios from 'axios';

export const GET_QUESTION = 'GET_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const EDIT_ANSWER = 'EDIT_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';

export const VOTE_UP_QUESTION = 'VOTE_UP_QUESTION';
export const VOTE_DOWN_QUESTION = 'VOTE_DOWN_QUESTION';
export const VOTE_UP_ANSWER = 'VOTE_UP_ANSWER';
export const VOTE_DOWN_ANSWER = 'VOTE_DOWN_ANSWER';

export const getQuestion = (questionId) => {
  try {
    const res = axios.get(`/article/${questionId}`);

    return {
      type: GET_QUESTION,
      payload: res.data, // 질문 데이터
    };
  } catch (err) {
    throw new Error('질문 GET 에러 발생');
  }
};

export const addAnswer = (questionId, answerData) => {
  try {
    const res = axios.post(`/comment/${questionId}`, answerData);

    return {
      type: ADD_ANSWER,
      payload: res.data, // 생성한 답변 데이터
    };
  } catch (err) {
    throw new Error('답변 POST 에러 발생');
  }
};

export const editAnswer = (questionId, answerData) => {
  try {
    const res = axios.patch(`/comment/${questionId}`, answerData);

    return {
      type: EDIT_ANSWER,
      payload: res.data, // 수정한 답변 데이터
    };
  } catch (err) {
    throw new Error('답변 PATCH 에러 발생');
  }
};

export const deleteAnswer = (answerId) => {
  try {
    const res = axios.delete(`/comment/${answerId}`);

    return {
      type: DELETE_ANSWER,
      payload: res.data, // 삭제한 답변 id
    };
  } catch (err) {
    throw new Error('답변 DELETE 에러 발생');
  }
};

// 🟢🟢🟢🟢🟢 투표

export const voteUpQuestion = (questionId) => {
  try {
    const res = axios.get(`/article/${questionId}/like`);

    return {
      type: VOTE_UP_QUESTION,
      payload: res.data, // 질문 투표 수
    };
  } catch (err) {
    throw new Error('질문 투표 GET 에러 발생');
  }
};

export const voteDownQuestion = (questionId) => {
  try {
    const res = axios.get(`/article/${questionId}/dislike`);

    return {
      type: VOTE_DOWN_QUESTION,
      payload: res.data, // 질문 투표 수
    };
  } catch (err) {
    throw new Error('질문 투표 GET 에러 발생');
  }
};

export const voteUpAnswer = (answerId) => {
  try {
    const res = axios.get(`/comment/${answerId}/like`);

    return {
      type: VOTE_UP_ANSWER,
      payload: res.data, // 답변 데이터 (투표 수 적용)
    };
  } catch (err) {
    throw new Error('답변 투표 GET 에러 발생');
  }
};

export const voteDownAnswer = (answerId) => {
  try {
    const res = axios.get(`/comment/${answerId}/dislike`);

    return {
      type: VOTE_DOWN_ANSWER,
      payload: res.data, // 답변 데이터 (투표 수 적용)
    };
  } catch (err) {
    throw new Error('답변 투표 GET 에러 발생');
  }
};
