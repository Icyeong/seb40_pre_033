// grid 모달 처럼
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Badge, PostUser } from '../Question/QuestionContent';

export const UserInfo = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  > div {
    margin-left: 8px;
  }
  > div {
    margin-left: 8px;

    h6 {
      color: var(--theme-link-color);
      font-size: 13px;
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--theme-link-color-hover);
      }
    }

    ul {
      display: flex;
      li:first-of-type {
        margin-left: 2px;
        font-weight: bold;
        font-size: 12px;
        color: var(--black-500);
      }
      li:not(:first-of-type) {
        margin: 0px 3px 0 2px;
        font-size: 12px;
        color: var(--black-400);
      }
    }
  }
`;
// user 정보 question 페이지 참고
export const UserContainer = () => {
  let question = useSelector((state) => state.questionReducer);
  return (
    <PostUser background="#D9EAF7">
      <UserInfo>
        <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
        <div>
          <h6>rainbow.gekota</h6>
          <h6>Australia</h6>
          <ul>
            <li>156</li>
            <li>
              <Badge color="#D1A684" />
              27
            </li>
          </ul>
          <h5>{question.tags}</h5>
        </div>
      </UserInfo>
    </PostUser>
  );
};
