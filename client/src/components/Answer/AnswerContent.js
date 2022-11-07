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
import { useParams, Link } from 'react-router-dom';
import { deleteAnswer } from '../../redux/actions/questionAction';
import useFetch from '../../hooks/useFetch';
import { useRef } from 'react';

export const AnswerContent = (type) => {
  const dispatch = useDispatch();
  const { qid } = useParams();
  // 🔥 userReducer 리팩토링
  // const isLoginUser = {
  //   email: 'hello@g.com',
  //   nickname: 'b',
  //   userId: 1,
  // };
  // const isNotLoginUser = {
  //   email: '',
  //   nickname: '',
  //   userId: 0,
  // };
  // let { email } = isLoginUser;

  // let { email } = useSelector((state) => state.userReducer);
  let user = useSelector((state) => state.userReducer);
  let question = useSelector((state) => state.questionReducer);

  const bodyRef = useRef();

  if (bodyRef.current) {
    bodyRef.current.innerHTML = question.comments[type.idx].content;
    console.log('#1', bodyRef.current);
  }

  const handleDeleteAnswer = async () => {
    console.log('DELETE ANSWER');

    const res = await useFetch(
      'DELETE',
      `/comment/${question.comments[type.idx].comment_id}`
    );
    dispatch(deleteAnswer(res));
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
                  to={`/questions/${qid}/answer/edit/${
                    question.comments[type.idx].comment_id
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
          <h5>{question.comments[type.idx].create_at}</h5>
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
