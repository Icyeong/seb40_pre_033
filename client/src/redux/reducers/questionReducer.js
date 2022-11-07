import {
  ADD_ANSWER,
  DELETE_ANSWER,
  EDIT_ANSWER,
  GET_QUESTION,
  VOTE_UP_QUESTION,
  VOTE_DOWN_QUESTION,
  VOTE_UP_ANSWER,
  VOTE_DOWN_ANSWER,
} from '../actions/questionAction';

const initialState = {
  articleId: 0,
  title: '',
  content: '',
  email: '',
  vote: 0,
  create_at: '',
  comments: [],
};

// dummy
// const initialState = {
//   articleId: 1,
//   title: '질문 제목',
//   content: '질문 내용',
//   email: '질문 작성자 이메일',
//   vote: 1,
//   create_at: 'Oct 27, 2021 at 15:34',
//   tags: ['python', 'ios'],
//   comments: [
//     {
//       commentId: 1,
//       content: '댓글 내용1',
//       email: '댓글 작성자 이메일1',
//       vote: 2,
//       create_at: 'Oct 27, 2022 at 15:34',
//     },
//     {
//       commentId: 2,
//       content: '댓글 내용2',
//       email: '댓글 작성자 이메일2',
//       vote: 3,
//       create_at: 'Oct 27, 2023 at 15:34',
//     },
//   ],
// };

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return { ...state, ...action.payload.data };
    case ADD_ANSWER:
      return { ...state, comments: [...state.comments, action.payload.data] };
    case EDIT_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.map((answer) => {
            if (answer.commentId === action.payload.data.commentId)
              answer = action.payload.data;

            return answer;
          }),
        ],
      };
    case DELETE_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.filter(
            (answer) => answer.commentId !== action.payload.data
          ),
        ],
      };
    case VOTE_UP_QUESTION:
      return {
        ...state,
        vote: action.payload.data,
      };
    case VOTE_DOWN_QUESTION:
      return {
        ...state,
        vote: action.payload.data,
      };
    case VOTE_UP_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.map((answer) => {
            if (answer.commentId === action.payload.data.commentId)
              answer.vote = action.payload.data.vote;

            return answer;
          }),
        ],
      };
    case VOTE_DOWN_ANSWER:
      return {
        ...state,
        comments: [
          state.comments.map((answer) => {
            if (answer.commentId === action.payload.data.commentId)
              answer.vote = action.payload.data.vote;

            return answer;
          }),
        ],
      };
    default:
      return state;
  }
};
