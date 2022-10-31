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
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { deleteAnswer } from '../../redux/actions/questionAction';

export const AnswerContent = (type) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const editUrl = `/questions/edit/${id}`;

  const handleDeleteAnswer = useCallback(() => {
    console.log('DELETE ANSWER');
    dispatch(deleteAnswer(id, question.comments[type.idx].comment_id));
  }, []);

  return (
    <Block>
      <Body>
        <p>{question.comments[type.idx].content}</p>
        {/* <pre>
          <code></code>
        </pre> */}
      </Body>
      <Detail>
        <PostMenu>
          {/* other */}
          {/* <li>Share</li>
          <li>
            <a href={editUrl}>Edit</a>
          </li>
          <li>Follow</li> */}
          {/* my */}
          <li>Share</li>
          <li>
            <a href={editUrl}>Edit</a>
          </li>
          <li className="delete-button">
            <button onClick={handleDeleteAnswer}>Delete</button>
          </li>
          <li>Flag</li>
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
