import axios from 'axios';
import { questionData } from '../../data/dummyQuestion';

export const GET_QUESTION = 'GET_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const EDIT_ANSWER = 'EDIT_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';

export const getQuestion = async (questionId) => {
  const res = await axios.get(`/article/${questionId}`);

  return {
    type: GET_QUESTION,
    payloadx: res.data, // 질문 데이터
    payload: questionData,
  };
};

export const addAnswer = async (questionId, answerData) => {
  const res = await axios.post(`/article/${questionId}/comment`, {
    answerData,
  });

  return {
    type: ADD_ANSWER,
    payload: res.data, // 생성 답변 데이터
  };
};

export const editAnswer = async (questionId, answerId, answerData) => {
  const res = await axios.patch(`/article/${questionId}/comment/${answerId}`, {
    answerData,
  });

  return {
    type: EDIT_ANSWER,
    payload: res.data, // 수정 답변 데이터
  };
};

export const deleteAnswer = async (questionId, answerId) => {
  const res = await axios.delete(`/article/${questionId}/comment/${answerId}`);

  return {
    type: DELETE_ANSWER,
    payload: res.data, // 삭제 답변 아이디
  };
};
