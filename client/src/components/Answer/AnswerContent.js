import { useSelector } from 'react-redux';
import {
  Badge,
  Block,
  Body,
  Detail,
  PostMenu,
  PostUser,
  UserInfo,
} from '../Question/QuestionContent';

export const AnswerContent = (type) => {
  let question = useSelector((state) => state.questionReducer);

  return (
    <Block>
      <Body>
        <p>{question.comments[type.idx].content}</p>
        <pre>
          <code></code>
        </pre>
      </Body>
      <Detail>
        <PostMenu>
          <li>Share</li>
          <li>Edit</li>
          <li>Follow</li>
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
