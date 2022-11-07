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
  return (
    <PostUser>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/559f9b4a76982a9c3e496e2e7686d4b1?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>김예린</h6>
          <h5>공주</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/epYPz.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>워뇽</h6>
          <h5>핫스팟</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/eb71c362ddeda80c2668d2575e97bc70?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>씨앗 희윤</h6>
          <h5>데헷</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/vwS69.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>상냥 혜민</h6>
          <h5>^-^</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/Ow1F4.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>김은진</h6>
          <h5>젤 잘나가</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/ACMnN.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>채영</h6>
          <h5>귀염둥이</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/5dd1a5bb0139abc749b7d4cd8cf7aa1b?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>홍홍 유진</h6>
          <h5>나 일찐</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/a2d818d801ce38a33807f68fdd92043a?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>tvanfosson</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/9779c9549e9e0f86e9df1065572bae7a?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>orbanbalage</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/Mqqfo.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Mark Tolonen</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/FkQhS.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Codemaker</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/8OS89.jpg?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Caleb E Ramos</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/XNd2C.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Timmmm</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/H62aN.jpg?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>WSBT</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/d6a482edss81cdfds48d3esddsdd2ab?s=256&d=identicon&r=PG&f=3"
          alt="user-thumbnail"
        />
        <div>
          <h6>JB-007</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/d6a4eeee6f3eccf5970003ab?s=256&d=identicon&r=PG&f=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Bqardi</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/yZM8h.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Krzysztof Chojnacki</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/d6a48ffffff059509650003ab?s=256&d=identicon&r=PG&f=2"
          alt="user-thumbnail"
        />
        <div>
          <h6>Jakub Narębski</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/TElMM.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>yousoumar</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/WmHoF.jpg?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Robby Cornelissen</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/BRRGS.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Mark Biek</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/b4b87a82355f286bb410cc1854389226?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>Dan Moulding</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/c916d92c098426d84778a7910cc32b39?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>mmx</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://lh3.googleusercontent.com/a/ALm5wu2unZqXMvoBs8VABXfNouGOVib48iGYkboa_aOj=k-s96"
          alt="user-thumbnail"
        />
        <div>
          <h6>Cassandra</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://i.stack.imgur.com/v7jDH.png?s=96&g=1"
          alt="user-thumbnail"
        />
        <div>
          <h6>Andreas Dolk</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
      <UserInfo>
        <img
          src="https://www.gravatar.com/avatar/2b7216361772f42fefdb90cbc8bd7855?s=96&d=identicon&r=PG"
          alt="user-thumbnail"
        />
        <div>
          <h6>Dylan Markow</h6>
          <h5>1 in one day</h5>
        </div>
      </UserInfo>
    </PostUser>
  );
};
