import axios from 'axios';

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
  }
};
