import {
  ADD_ANSWER,
  DELETE_ANSWER,
  EDIT_ANSWER,
  GET_QUESTION,
} from '../actions/questionAction';

const initialState = {
  article_id: 0,
  title: '',
  content: '',
  email: '',
  vote: 0,
  create_at: '',
  comments: [],
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return { ...state, question: action.payload };
    case ADD_ANSWER:
      return [...state.comments, action.payload];
    case EDIT_ANSWER:
      return [...state.comments.filter];
    case DELETE_ANSWER:
      return {};
    default:
      return { question: state };
  }
};
