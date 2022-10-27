import styled from 'styled-components';
import { Tags } from '../Common/Tags';

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

const QuestionTags = styled(Tags)`
  margin: 24px 0 25px 0;
`;

const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 16px 0;
  padding-top: 4px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const PostMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1 auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;

  margin: 4px 16px 4px 0;
  margin-right: 16px;

  li {
    margin: 0 4px;
    font-size: 13px;
    color: var(--black-500);
    height: 1rem;
    cursor: pointer;

    &:hover,
    &:active {
      color: var(--black-400);
    }
  }

  h6 {
    font-size: 11px;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    li {
      font-size: 11px;
    }
  }
`;

export const PostUser = styled.ul`
  width: 200px;
  margin: 4px 0;
  padding: 5px 6px 7px 7px;
  background: ${(props) => props.background && props.background};
  border-radius: 3px;

  h5 {
    margin: 1px 0 4px 0;
    color: var(--black-500);
    font-size: 12px;
  }
`;

const UserInfo = styled.div`
  display: flex;

  img {
    width: 32px;
    height: 32px;
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

  // Mobile
  @media screen and (max-width: 640px) {
    > div {
      h6 {
        font-size: 11px;
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

export const QuestionContent = (type) => {
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
      {type.type === 'question' && (
        <QuestionTags>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">python</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">ios</a>
          </li>
        </QuestionTags>
      )}
      <Detail>
        <PostMenu>
          <li>Share</li>
          <li>Edit</li>
          <li>Follow</li>
        </PostMenu>
        {/* ✨ 리팩토링 예정 */}
        {type.type === 'question' ? (
          <div>
            {/* <PostUser>
              <h5>edited 18 hours ago</h5>
              <UserInfo>
                <img
                  src="https://via.placeholder.com/32"
                  alt="user-thumbnail"
                />
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
            </PostUser> */}
            <PostUser background="#D9EAF7">
              <h5>asked Oct 16 at 8:40</h5>
              <UserInfo>
                <img
                  src="https://via.placeholder.com/32"
                  alt="user-thumbnail"
                />
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
        ) : (
          <PostUser>
            <h5>answerd Oct 17 at 6:54</h5>
            <UserInfo>
              <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
              <div>
                <h6>답변한 사람</h6>
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
        )}
      </Detail>
    </Block>
  );
};
