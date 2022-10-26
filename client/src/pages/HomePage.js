import styled from 'styled-components';

const Block = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  a {
    margin: 20px;
  }
`;

export const HomePage = () => {
  return (
    <Block>
      <a href="/">홈페이지로 이동</a>
      <a href="/users/login">로그인 페이지로 이동</a>
      <a href="/users/signup">회원가입 페이지로 이동</a>
      <a href="/questions/1">상세글 페이지로 이동</a>
      <a href="/questions/ask">질문글 작성 페이지로 이동</a>
      <a href="/questions/edit/1">질문글 수정 페이지로 이동</a>
    </Block>
  );
};
