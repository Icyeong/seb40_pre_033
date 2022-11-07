// grid 모달 처럼
import styled from 'styled-components';

export const PostUser = styled.ul`
  margin: 4px 0;
  padding: 5px 6px 7px 7px;
  /* border: 1px solid red; */
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  // Mobile
  @media screen and (max-width: 1260px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  // Mobile
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  // Mobile
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 6px 7px 7px;

  img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
  > div {
    margin-left: 9px;

    h6 {
      color: var(--theme-link-color);
      font-size: 15px;
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--theme-link-color-hover);
      }
    }
    h5 {
      font-size: 13px;
      color: var(--black-500);
    }
  }
`;
// user 정보 question 페이지 참고
export const UserContainer = () => {
  let question = useSelector((state) => state.questionReducer);

  if (question.createAt) {
    var date = `${question.createAt.slice(0, 10)} ${question.createAt.slice(
      11,
      19
    )}`;
  }

  return (
    <PostUser>
      <UserInfo>
        <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
        <div>
          <h6>{question.email}</h6>
          <h5>{date}</h5>

        </div>
      </UserInfo>
      <UserInfo>
        <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
        <div>
          <h6>{question.email}</h6>
          <h5>{date}</h5>

        </div>
      </UserInfo>
      <UserInfo>
        <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
        <div>
          <h6>{question.email}</h6>
          <h5>{date}</h5>

        </div>
      </UserInfo>
      <UserInfo>
        <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
        <div>
          <h6>{question.email}</h6>
          <h5>{date}</h5>

        </div>
      </UserInfo>
    </PostUser>
  );
};
