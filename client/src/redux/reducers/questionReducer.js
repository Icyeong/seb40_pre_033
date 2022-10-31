import {
  ADD_ANSWER,
  DELETE_ANSWER,
  EDIT_ANSWER,
  GET_QUESTION,
  VOTE_QUESTION,
  VOTE_ANSWER,
} from '../actions/questionAction';

// const initialState = {
//   article_id: 0,
//   title: '',
//   content: '',
//   email: '',
//   vote: 0,
//   create_at: '',
//   comments: [],
// };

// dummy
const initialState = {
  article_id: 1,
  title: '질문 제목',
  content: '질문 내용',
  email: '질문 작성자 이메일',
  vote: 1,
  create_at: 'Oct 27, 2021 at 15:34',
  tags: ['python', 'ios'],
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
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return { ...state, ...action.payload };
    case ADD_ANSWER:
      return { ...state, comments: [...state.comments, action.payload] };
    case EDIT_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.map((answer) => {
            if (answer.comment_id === action.payload.comment_id)
              answer = action.payload;

            return answer;
          }),
        ],
      };
    case DELETE_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.filter(
            (answer) => answer.comment_id !== action.payload
          ),
        ],
      };
    case VOTE_QUESTION:
      return {
        ...state,
        vote: action.payload,
      };
    case VOTE_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.map((answer) => {
            if (answer.comment_id === action.payload.comment_id)
              answer.vote = action.payload.vote;

            return answer;
          }),
        ],
      };
    default:
      return state;
  }
};
