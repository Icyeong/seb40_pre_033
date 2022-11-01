import axios from 'axios';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const EDIT_QUESTION = 'EDIT_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';

export const getQuestions = () => {
  try {
    const res = axios.get(`/article`);

    return {
      type: GET_QUESTIONS,
      payload: res.data, // 질문 리스트 데이터
    };
  } catch (err) {
    throw new Error('질문리스트 GET 에러 발생');
  }
};

export const addQuestion = (questionData) => {
  try {
    const res = axios.post(`/article`, questionData);

    return {
      type: ADD_QUESTION,
      payload: res.data, // 생성한 질문 데이터
    };
  } catch (err) {
    throw new Error('질문 POST 에러 발생');
  }
};

export const editQuestion = (questionId, questionData) => {
  try {
    const res = axios.patch(`/article/${questionId}`, questionData);

    return {
      type: EDIT_QUESTION,
      payload: res.data, // 수정한 질문 데이터
    };
  } catch (err) {
    throw new Error('질문 PATCH 에러 발생');
  }
};

export const deleteQuestion = (questionId) => {
  try {
    const res = axios.delete(`/article/${questionId}`);

    return {
      type: DELETE_QUESTION,
      payload: res.data, // 삭제한 질문 id
    };
  } catch (err) {
    throw new Error('질문 DELETE 에러 발생');
  }
};
