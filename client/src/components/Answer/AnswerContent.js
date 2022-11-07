import { useDispatch, useSelector } from 'react-redux';
import {
  Badge,
  Block,
  Body,
  Detail,
  PostMenu,
  PostUser,
  UserInfo,
} from '../Question/QuestionContent';
import { Link } from 'react-router-dom';
import { deleteAnswer } from '../../redux/actions/questionAction';
import useFetch from '../../hooks/useFetch';
import { useRef } from 'react';

export const AnswerContent = (type) => {
  const dispatch = useDispatch();

  let user = useSelector((state) => state.userReducer);
  let question = useSelector((state) => state.questionReducer);

  const bodyRef = useRef();

  if (bodyRef.current) {
    bodyRef.current.innerHTML = question.comments[type.idx].content;
  }

  const handleDeleteAnswer = async () => {
    const res = await useFetch(
      'DELETE',
      `/comment/${question.comments[type.idx].commentId}`
    );
    dispatch(deleteAnswer(res));

    console.log('DELETE ANSWER', res);

    window.location.reload();
  };

  return (
    <Block>
      <Body ref={bodyRef}></Body>
      <Detail>
        <PostMenu>
          <li>Share</li>
          {user.data &&
          user.data.email === question.comments[type.idx].email ? (
            <>
              <li>
                <Link
                  to={`/answer/edit/${question.articleId}/${
                    question.comments[type.idx].commentId
                  }`}
                >
                  Edit
                </Link>
              </li>
              <li>
                <button onClick={handleDeleteAnswer}>Delete</button>
              </li>
              <li>Flag</li>
            </>
          ) : (
            <li>Follow</li>
          )}
        </PostMenu>
        <PostUser>
          <h5>{question.comments[type.idx].createAt}</h5>
          <UserInfo>
            <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
            <div>
              <h6>{question.comments[type.idx].email}</h6>
              <ul>
                <li>156</li>
                <li>
                  <Badge color="#D1A684" />
                  27
                </li>
              </ul>
            </div>
          </UserInfo>
        </PostUser>
      </Detail>
    </Block>
  );
};
