import {
<<<<<<< HEAD
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  GET_QUESTIONS,
} from '../actions/questionsAction';

// const initialState = [
//   {
//     article_id: 0,
//     title: '',
//     content: '',
//     email: '',
//     vote: 0,
//     create_at: '',
//     comments: [],
//   },
// ];

// dummy
const initialState = [
  {
    article_id: 1,
    title: '질문 제목1',
    content: '질문 내용1',
    email: '질문 작성자 이메일1',
    vote: 1,
    create_at: 'Oct 27, 2021 at 15:34',
    tags: ['python1', 'ios1'],
    comments: [
      {
        comment_id: 1,
        content: '댓글 내용1',
        email: '댓글 작성자 이메일1',
        vote: 2,
        create_at: 'Oct 27, 2022 at 15:34',
      },
      {
        comment_id: 2,
        content: '댓글 내용2',
        email: '댓글 작성자 이메일2',
        vote: 3,
        create_at: 'Oct 27, 2023 at 15:34',
      },
    ],
  },
  {
    article_id: 2,
    title: '질문 제목2',
    content: '질문 내용2',
    email: '질문 작성자 이메일2',
    vote: 2,
    create_at: 'Oct 27, 2022 at 15:34',
    tags: ['python2', 'ios2'],
    comments: [
      {
        comment_id: 1,
        content: '댓글 내용1',
        email: '댓글 작성자 이메일1',
        vote: 2,
        create_at: 'Oct 27, 2022 at 15:34',
      },
      {
        comment_id: 2,
        content: '댓글 내용2',
        email: '댓글 작성자 이메일2',
        vote: 3,
        create_at: 'Oct 27, 2023 at 15:34',
      },
    ],
  },
  {
    article_id: 3,
    title: '질문 제목3',
    content: '질문 내용3',
    email: '질문 작성자 이메일3',
    vote: 3,
    create_at: 'Oct 27, 2023 at 15:34',
    tags: ['python3', 'ios3'],
    comments: [
      {
        comment_id: 1,
        content: '댓글 내용1',
        email: '댓글 작성자 이메일1',
        vote: 2,
        create_at: 'Oct 27, 2022 at 15:34',
      },
      {
        comment_id: 2,
        content: '댓글 내용2',
        email: '댓글 작성자 이메일2',
        vote: 3,
        create_at: 'Oct 27, 2023 at 15:34',
      },
    ],
  },
];

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return [...state, ...action.payload];
    case ADD_QUESTION:
      return [...state, action.payload];
    case EDIT_QUESTION:
      return [
        ...state.map((question) => {
          if (question.article_id === action.payload.article_id)
            question = action.payload;

          return question;
        }),
      ];
    case DELETE_QUESTION:
      return [
        ...state.filter((question) => question.article_id !== action.payload),
      ];
=======
  GET_POSTS,
  GET_TAG_POSTS,
  ADD_POST,
  DELETE_POST,
} from '../actions/questionsAction';

const initialState = {
  posts: [
    {
      article_id: 1,
      title: 'Sum values of specific rows if fields are the same',
      content:
        'Hi Im trying to sum values of one column if ID matches for all in a dataframe For example ID Gender value 1 Male 5 1',
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
>>>>>>> upstream/dev
    default:
      return state;
  }
};
