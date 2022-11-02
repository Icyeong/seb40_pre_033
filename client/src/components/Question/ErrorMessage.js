import styled from 'styled-components';

const Block = styled.div`
  color: rgb(208, 57, 62);
  font-size: 12px;
  margin-top: 5px;
`;

export const ErrorMessage = (type) => {
  return <Block>{type.text}</Block>;
};
