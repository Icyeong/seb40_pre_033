import styled from 'styled-components';

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 302px;
`;

export const RightSidebar = styled.div`
  border: 1px solid #f1e5bc;
  background-color: #fbf3d5;
  color: #525960;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);

  header {
    padding: 12px 15px;
    border-bottom: 1px solid #f1e5bc;
    font-size: 13px;
    font-weight: 700;
  }

  & > header:nth-child(3) {
    border-top: 1px solid #f1e5bc;
  }

  ul {
    padding: 4px 15px;
    background-color: #faf5e6;
  }
  li {
    margin: 12px 0;
    font-size: 13px;
    list-style: inside;
  }
`;

export const EditWidget = () => {
  return (
    <RightSide>
      <RightSidebar>
        <header>How to Edit</header>
        <ul>
          <li>Correct minor typos or mistakes</li>
          <li>Clarify meaning without changing it</li>
          <li>Add related resources or links</li>
          <li>Always respect the author’s intent</li>
          <li>Don’t use edits to reply to the author</li>
        </ul>
      </RightSidebar>
    </RightSide>
  );
};
