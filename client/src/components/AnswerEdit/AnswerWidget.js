import styled from 'styled-components';

const RightSideWidget = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const RightSidebar = styled.div`
  border-right: 1px solid hsl(47, 65%, 84%);
  border-bottom: 1px solid hsl(47, 65%, 84%);
  border-left: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 83%, 91%);
  color: #525960;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);

  header {
    padding: 12px 15px;
    border-bottom: 1px solid hsl(47, 65%, 84%);
    font-size: 12px;
    font-weight: 650;
  }
  ul {
    padding: 4px 15px;
    background-color: hsl(47, 87%, 94%);
  }
  li {
    margin: 12px 0 12px 20px;
    font-size: 12px;
    list-style: circle;
  }
`;

export const AnswerWidget = () => {
  return (
    <RightSideWidget>
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
    </RightSideWidget>
  );
};
