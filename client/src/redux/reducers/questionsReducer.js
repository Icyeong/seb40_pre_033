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
