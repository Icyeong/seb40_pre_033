import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 5px;

  > .per-page {
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 31.91px;
      height: 27px;
      margin: 0 2px;
      padding: 0 8px;
      color: #3b4045;
      background-color: #ffffff;
      border: 1px solid #babfc3;
      border-radius: 4px;
      cursor: pointer;
      :hover {
        background-color: #d6d9dc;
      }
      &.btn-active {
        color: #ffffff;
        background-color: #f48225;
        cursor: default;
      }
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 27px;
      font-size: 13px;
      margin: 0 2px;
      padding: 0 8px;
    }
  }
`;
