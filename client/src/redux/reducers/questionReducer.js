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
    // case GET_QUESTION:
    //   return {};
    // case ADD_ANSWER:
    //   return {};
    // case EDIT_ANSWER:
    //   return {};
    // case DELETE_ANSWER:
    //   return {};
    default:
      return { question: state };
  }
};
