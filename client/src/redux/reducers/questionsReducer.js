import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  GET_QUESTIONS,
} from '../actions/questionsAction';

const initialState = {
  data: [],
  pageInfo: {
    page: 1,
    size: 10,
    totalElements: 0,
    totalPages: 1,
  },
};

// dummy (질문 상세 - title, content, user)
// const initialState = {
//   data: [
//     {
//       article_id: 1,
//       title: '질문 제목1',
//       content: '질문 내용1',
//       email: '질문 작성자 이메일1',
//       vote: 1,
//       create_at: 'Oct 27, 2021 at 15:34',
//       tags: ['python1', 'ios1'],
//       comments: [
//         {
//           comment_id: 1,
//           content: '댓글 내용1',
//           email: '댓글 작성자 이메일1',
//           vote: 2,
//           create_at: 'Oct 27, 2022 at 15:34',
//         },
//         {
//           comment_id: 2,
//           content: '댓글 내용2',
//           email: '댓글 작성자 이메일2',
//           vote: 3,
//           create_at: 'Oct 27, 2023 at 15:34',
//         },
//       ],
//     },
//   ],
//   pageInfo: {
//     page: 1,
//     size: 10,
//     totalElements: 20,
//     totalPages: 2,
//   },
// };

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        data: [...action.payload.data],
        pageInfo: { ...state.pageInfo, ...action.payload.pageInfo },
      };
    case ADD_QUESTION:
      return {
        data: [...state.data, action.payload.data],
        pageInfo: { ...state.pageInfo },
      };
    case EDIT_QUESTION:
      return {
        data: [
          ...state.data.map((question) => {
            if (question.article_id === action.payload.data.article_id)
              question = action.payload.data;

            return question;
          }),
        ],
        pageInfo: { ...state.pageInfo },
      };
    case DELETE_QUESTION:
      return {
        data: [
          ...state.data.filter(
            (question) => question.article_id !== action.payload
          ),
        ],
        pageInfo: { ...state.pageInfo },
      };
    default:
      return state;
  }
};
