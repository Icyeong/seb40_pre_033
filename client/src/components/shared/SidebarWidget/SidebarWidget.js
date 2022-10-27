import styled from 'styled-components';
import { EditWidget } from './EditWidget';

export const RightSide = styled.div`
  /* margin 사이즈 수정 가능 */
  margin-top: 80px;
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
    font-weight: bold;
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

export const SidebarWidget = () => {
  return (
    <RightSide>
      <RightSidebar>
        <header>The Overflow Blog</header>
        <ul>
          <li>ideal fit for developing blockchains</li>
          <li>Environments on-demand (Ep. 479)</li>
          <li>Add related resources or links</li>
          <li>Always respect the author’s intent</li>
          <li>Don’t use edits to reply to the author</li>
        </ul>
        <header>Featured on Meta</header>
        <ul>
          <li>Student Ambassador Program</li>
          <li>Google Analytics 4 (GA4) upgrade</li>
          <li>Question Lifecycle</li>
          <li>The [option] tag is being burninated</li>
          <li>WSO2 launches, and Google Go sunsets</li>
        </ul>
      </RightSidebar>
      <EditWidget />
    </RightSide>
  );
};
