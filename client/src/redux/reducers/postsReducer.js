import {
  GET_POSTS,
  GET_TAG_POSTS,
  ADD_POST,
  DELETE_POST,
} from '../actions/postsAction';

const initialState = {
  posts: [
    {
      article_id: 1,
      title: '질문 제목',
      content: '질문 내용',
      vote: 1,
      image:
        'https://lh3.googleusercontent.com/a-/AFdZucpXdOFmV8dt0puZhTxiEwikZdoIcbWGo_JHU05Q=k-s32',
      user: 'Medardas Prusinskas',
      create_at: 'Oct 27, 2021 at 15:34',
      tags: ['python', 'ios'],
    },
    {
      article_id: 2,
      title: '질문 제목2',
      content: '질문 내용2',
      vote: 2,
      image:
        'https://lh3.googleusercontent.com/a-/AFdZucpXdOFmV8dt0puZhTxiEwikZdoIcbWGo_JHU05Q=k-s32',
      user: 'Yerin Kim',
      create_at: 'Oct 27, 2021 at 15:34',
      tags: ['javascript', 'css'],
    },
    {
      article_id: 3,
      title: '질문 제목3',
      content: '질문 내용2',
      vote: 2,
      image:
        'https://lh3.googleusercontent.com/a-/AFdZucpXdOFmV8dt0puZhTxiEwikZdoIcbWGo_JHU05Q=k-s32',
      user: 'love thakker',
      create_at: 'Oct 27, 2021 at 15:34',
      tags: ['javascript', 'css'],
    },
  ],
  //   article_id: 1,
  //   title: '질문 제목',
  //   content: '질문 내용',
  //   vote: 1,
  //   create_at: 'Oct 27, 2021 at 15:34',
  //   tags: ['python', 'ios'],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_TAG_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.article_id !== action.payload.article_id
        ),
      };
    default:
      return state;
  }
};
