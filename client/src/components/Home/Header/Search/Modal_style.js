import styled from 'styled-components';

// 모달이 빨리 사라져 클릭 되지 않음

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5px;
  column-gap: 5px;
  width: 100%;
  height: 70%;
  padding: 10px;
  border-bottom: 1px solid hsl(210, 8%, 85%);

  @media screen and (max-width: 875px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

export const FontSmall = styled.span`
  font-size: 13px;
`;

export const Hint = styled(FontSmall)`
  margin-right: 5px;
  font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono',
    Menlo, Monaco, Consolas, monospace;
`;

export const Explanation = styled(FontSmall)`
  color: hsl(210, 8%, 55%);
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  margin: -4px;
  padding: 12px;
  font-size: 11px;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-flow: row wrap;
  }
`;
export const SearchLink = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 0.6em;
  font-size: 11px;
  font-weight: normal;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
`;

export const Help = styled.div`
  color: hsl(206, 100%, 40%);
  cursor: pointer;
`;
