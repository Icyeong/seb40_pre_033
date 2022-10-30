import axios from 'axios';

export const GET_QUESTION = 'GET_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const EDIT_ANSWER = 'EDIT_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';

export const VOTE_QUESTION = 'VOTE_QUESTION';
export const VOTE_ANSWER = 'VOTE_ANSWER';

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
    const res = axios.post(`/article/${questionId}/comment`, {
      answerData,
    });

    return {
      type: ADD_ANSWER,
      payload: res.data, // 생성한 답변 데이터
    };
  } catch (err) {
    throw new Error('답변 POST 에러 발생');
  }
};

export const editAnswer = (questionId, answerId, answerData) => {
  try {
    const res = axios.patch(`/article/${questionId}/comment/${answerId}`, {
      answerData,
    });

    return {
      type: EDIT_ANSWER,
      payload: res.data, // 수정한 답변 데이터
    };
  } catch (err) {
    throw new Error('답변 PATCH 에러 발생');
  }
};

export const deleteAnswer = (questionId, answerId) => {
  try {
    const res = axios.delete(`/article/${questionId}/comment/${answerId}`);

    return {
      type: DELETE_ANSWER,
      payload: res.data, // 삭제한 답변 id
    };
  } catch (err) {
    throw new Error('답변 DELETE 에러 발생');
  }
};

// 🟢🟢🟢🟢🟢 투표

export const voteQuestion = (questionId) => {
  try {
    const res = axios.get(`/article/${questionId}/vote-quesion`);

    return {
      type: VOTE_QUESTION,
      payload: res.data, // 질문 투표 수
    };
  } catch (err) {
    throw new Error('질문 투표 GET 에러 발생');
  }
};

export const voteAnswer = (questionId, answerId) => {
  try {
    const res = axios.get(
      `/article/${questionId}/comment/${answerId}/vote-answer`
    );

    return {
      type: VOTE_ANSWER,
      payload: res.data, // 답변 데이터 (투표 수 적용)
    };
  } catch (err) {
    throw new Error('답변 투표 GET 에러 발생');
  }
};
