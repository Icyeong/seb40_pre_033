import axios from 'axios';

<<<<<<< HEAD
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
    const res = axios.post(`/article`, {
      questionData,
    });

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
    const res = axios.patch(`/article/${questionId}`, {
      questionData,
    });

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
=======
export const GET_POSTS = 'GET_POSTS';
export const GET_TAG_POSTS = 'GET_TAG_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';

export const allPosts = async (posts) => {
  try {
    const res = await axios.get(`/api/${posts}`);

    return {
      type: GET_POSTS,
      payload: res.data.data,
    };
  } catch (err) {
    throw new Error('allposts GET 에러 발생');
  }
};

export const allTagsPosts = async (tagName) => {
  try {
    const res = await axios.get(`/api/posts/tag/${tagName}`);

    return {
      type: GET_POSTS,
      payload: res.data.data,
    };
  } catch (err) {
    throw new Error('allTagsPosts GET 에러 발생');
  }
};

export const addPost = async (posts) => {
  try {
    const res = await axios.get(`/api/${posts}`);

    return {
      type: ADD_POST,
      payload: res.data.data,
    };
  } catch (err) {
    throw new Error('addPost GET 에러 발생');
  }
};

export const deletePost = async (questionId) => {
  try {
    const res = await axios.get(`/article/${questionId}`);

    return {
      type: DELETE_POST,
      payload: res.data.data,
    };
  } catch (err) {
    throw new Error('deletePost GET 에러 발생');
>>>>>>> upstream/dev
  }
};
