import styled from 'styled-components';

export const BlueButton = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: #0a95ff;
  font-size: 13px;
  color: white;

  a {
    padding: 10.4px;
  }

  &:active {
    background-color: #00b3bf;
  }
  &:hover {
    background-color: #0074cc;
  }
  &:focus {
    background-color: #0074cc;
  }
`;
