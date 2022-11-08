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
import { useRef, useEffect } from 'react';

export const AnswerContent = (type) => {
  const dispatch = useDispatch();

  let user = useSelector((state) => state.userReducer);
  let question = useSelector((state) => state.questionReducer);

  const bodyRef = useRef();

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = question.comments[type.idx].content;
    }
  }, [question]);

  const handleDeleteAnswer = async () => {
    const res = await useFetch(
      'DELETE',
      `/comment/${question.comments[type.idx].commentId}`
    );
    dispatch(deleteAnswer(res));

    // console.log('DELETE ANSWER', res);
  };

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  if (question.comments[type.idx].createdAt) {
    var date = `${question.comments[type.idx].createdAt.slice(
      0,
      10
    )} ${question.comments[type.idx].createdAt.slice(11, 19)}`;
  }

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
          <h5>{date}</h5>
          <UserInfo>
            <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
            <div>
              <h6>{question.comments[type.idx].email}</h6>
              <ul>
                <li>{rand(1, 10000)}</li>
                <li>
                  <Badge color="#FFCC01" />
                  {rand(1, 100)}
                </li>
                <li>
                  <Badge color="#B4B8BC" />
                  {rand(1, 100)}
                </li>
                <li>
                  <Badge color="#D1A684" />
                  {rand(1, 100)}
                </li>
              </ul>
            </div>
          </UserInfo>
        </PostUser>
      </Detail>
    </Block>
  );
};
