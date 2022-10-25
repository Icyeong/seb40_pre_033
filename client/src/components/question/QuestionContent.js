import styled from 'styled-components';

const Block = styled.div`
  padding-right: 16px;
`;

const Body = styled.div`
  p {
    margin: 0 0 16.5px 0;
    font-size: 15px;
  }
  pre {
    margin: 0;
    padding: 12px;
    background-color: #f6f6f6;
    font-size: 13px;
    border-radius: 5px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  margin: 24px 0 25px 0;

  li {
    margin-right: 4px;
    padding: 4px 6px;
    color: hsl(205, 47%, 42%);
    background-color: hsl(205, 46%, 92%);
    border-radius: 3px;
    font-size: 12px;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  padding-top: 4px;

  > div {
    display: flex;
  }
`;

const PostMenu = styled.ul`
  display: flex;
  width: 96px;
  margin: 4px 16px 4px 0;
  margin-right: 16px;

  li {
    margin: 4px;
    font-size: 13px;
    color: #6a737c;
  }
`;

export const PostUser = styled.ul`
  width: 200px;
  margin: 4px 0;
  padding: 5px 6px 7px 7px;
  background: ${(props) => props.color && props.color};
  border-radius: 3px;

  h5 {
    margin: 1px 0 4px 0;
    color: #00747c;
    font-size: 12px;
  }
`;

const UserInfo = styled.div`
  display: flex;

  img {
    width: 32px;
    height: 32px;
  }

  > div {
    margin-left: 8px;

    h6 {
      color: #00747c;
      font-size: 13px;
    }

    ul {
      display: flex;
      li:first-of-type {
        margin-left: 2px;
        font-weight: bold;
        font-size: 12px;
      }
      li:not(:first-of-type) {
        margin: 0px 3px 0 2px;
        font-size: 12px;
        color: #838c95;
      }
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  margin: 0px 3px 0 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const QuestionContent = () => {
  return (
    <Block>
      <Body>
        <p>
          The program is to accept a choice from the user. Choice 1 to check the
          deposit Choice 2 to make a deposit - when I entered choice two it
          should accept a deposit that is greater than 0 but less than 100,000,
          if this condition is not met then the program should prompt the user
          to enter the deposit until the condition is met. If the condition is
          met, then the program should add the deposit entered to 30,000 and
          print the result. My problem is even if the deposit is greater than
          100,000 or less than 0, it is still printing the result and it should
          only prompt the user to enter the deposit until it is greater than 0
          or less than 100,000. What could be the error or problem in my code?
        </p>
        <pre>
          <code>
            {`
ul {
  background-color: red;
  font-family: 바탕체;
  font-size: 50px;
}
            `}
          </code>
        </pre>
      </Body>
      <Tags>
        <li>python</li>
        <li>ios</li>
      </Tags>
      <Detail>
        <PostMenu>
          <li>Share</li>
          <li>Edit</li>
          <li>Follow</li>
        </PostMenu>
        <div>
          <PostUser>
            <h5>edited 18 hours ago</h5>
            <UserInfo>
              <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
              <div>
                <h6>편집한 사람</h6>
                <ul>
                  <li>3,192</li>
                  <li>
                    <Badge color="#FFCC01" />6
                  </li>
                  <li>
                    <Badge color="#B4B8BC" />
                    11
                  </li>
                  <li>
                    <Badge color="#D1A684" />
                    27
                  </li>
                </ul>
              </div>
            </UserInfo>
          </PostUser>
          <PostUser color="#D9EAF7">
            <h5>asked Oct 16 at 8:40</h5>
            <UserInfo>
              <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
              <div>
                <h6>질문한 사람</h6>
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
        </div>
      </Detail>
    </Block>
  );
};
