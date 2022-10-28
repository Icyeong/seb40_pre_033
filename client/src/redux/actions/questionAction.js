import axios from 'axios';

export const GET_QUESTION = 'GET_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const EDIT_ANSWER = 'EDIT_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';

export const getQuestion = async (questionId) => {
  try {
    const res = await axios.get(`/article/${questionId}`);

    return {
      type: GET_QUESTION,
      payload: res.data, // 질문 데이터
    };
  } catch (err) {
    throw new Error('질문 GET 에러 발생');
  }
};

export const addAnswer = async (questionId, answerData) => {
  try {
    const res = await axios.post(`/article/${questionId}/comment`, {
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

export const editAnswer = async (questionId, answerId, answerData) => {
  try {
    const res = await axios.patch(
      `/article/${questionId}/comment/${answerId}`,
      {
        answerData,
      }
    );

    return {
      type: EDIT_ANSWER,
      payload: res.data, // 수정한 답변 데이터
    };
  } catch (err) {
    throw new Error('답변 PATCH 에러 발생');
  }
};

export const deleteAnswer = async (questionId, answerId) => {
  try {
    const res = await axios.delete(
      `/article/${questionId}/comment/${answerId}`
    );

    return {
      type: DELETE_ANSWER,
      payload: res.data, // 삭제한 답변 데이터(or id)
    };
  } catch (err) {
    throw new Error('답변 DELETE 에러 발생');
  }
};
