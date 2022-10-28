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

export const AnswerContent = () => {
  let question = useSelector((state) => state.questionReducer);

  return (
    <Block>
      <Body>
        <p>question.comments[0].content</p>
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
          <h5>{question.comments[0].create_at}</h5>
          <UserInfo>
            <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
            <div>
              <h6>{question.comments[0].email}</h6>
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
