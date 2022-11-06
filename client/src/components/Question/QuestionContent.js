import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Tags } from '../Common/Tags';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteQuestion } from '../../redux/actions/questionsAction';
import useFetch from '../../hooks/useFetch';
import { useRef } from 'react';

export const Block = styled.div`
  padding-right: 16px;
  width: 100%;
`;

export const Body = styled.div`
  font-size: 15px;
`;

export const QuestionTags = styled(Tags)`
  margin: 24px 0 25px 0;
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  flex-wrap: wrap;
  margin: 16px 0;
  padding-top: 4px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const PostMenu = styled.ul`
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

    a,
    button {
      color: var(--black-500);

      &:hover,
      &:active {
        color: var(--black-400);
      }
    }
  }

  /* .delete-button {
    button {
      color: var(--red-500);
      &:active,
      &:hover {
        color: var(--red-400);
      }
    }
  } */

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

export const UserInfo = styled.div`
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

export const Badge = styled.span`
  display: inline-block;
  margin: 0px 3px 0 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const QuestionContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { qid } = useParams();


  // 🔥 userReducer 리팩토링
  const isLoginUser = {
    email: 'ggg@ggg.com',
    nickname: 'b',
    userId: 1,
  };
  // const isNotLoginUser = {
  //   email: '',
  //   nickname: '',
  //   userId: 0,
  // };
  let { email } = isLoginUser;

  // let { email } = useSelector((state) => state.userReducer);
  let user = useSelector((state) => state.userReducer);

  let question = useSelector((state) => state.questionReducer);

  const bodyRef = useRef();

  if (bodyRef.current) {
    bodyRef.current.innerHTML = question.content;
    console.log('#1', bodyRef.current);
  }

  const handelDeleteQuestion = async () => {
    console.log('DELETE QUESTION');

    const res = await useFetch('DELETE', `/article/${qid}`);
    console.log('delete question res', res);
    dispatch(deleteQuestion(res));

    navigate('/');
  };

  // 태그 바꾸기
  const tags = ['임시'];

  return (
    <Block>
      <Body ref={bodyRef}></Body>
      <QuestionTags>
        {tags.map((tag, idx) => (
          <li key={idx}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">{tag}</a>
          </li>
        ))}
      </QuestionTags>
      <Detail>
        <PostMenu>
          <li>Share</li>
          {user.data && user.data.email === question.email ? (
            <>
              <li>
                <Link to={`/questions/edit/${qid}`}>Edit</Link>
              </li>
              <li>
                <button onClick={handelDeleteQuestion}>Delete</button>
              </li>
              <li>Flag</li>
            </>
          ) : (
            <li>Follow</li>
          )}
        </PostMenu>
        <PostUser background="#D9EAF7">
          <h5>{question.create_at}</h5>
          <UserInfo>
            <img src="https://via.placeholder.com/32" alt="user-thumbnail" />
            <div>
              <h6>{question.email}</h6>
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
