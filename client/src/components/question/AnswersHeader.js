import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 8px 0;

  h2 {
    font-size: 19px;
  }
`;

const SortSelect = styled.div`
  position: relative;

  label {
    font-size: 12px;
  }
  select {
    padding: 7.8px 32px 7.8px 9.1px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    font-size: 13px;
    color: #0c0d0e;
    appearance: none;

    &:focus {
      border-color: hsl(205, 47%, 42%);
      box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
      outline: 0;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: var(--zi-selected);
    right: 13px;
    border-color: currentColor transparent;
    border-style: solid;
    border-width: 4px;
    pointer-events: none;
    box-sizing: inherit;
  }
  &:before {
    top: calc(50% - 5px);
    border-top-width: 0;
    border-bottom-width: 4px;
  }
  &:after {
    top: calc(50% + 1px);
    border-top-width: 4px;
    border-bottom-width: 0;
  }
`;

export const AnswersHeader = () => {
  return (
    <Block>
      <h2>2 Answers</h2>
      <SortSelect>
        <label htmlFor="answers-sort">Sorted by: </label>
        <select id="answers-sort">
          <option value="scoredesc" defaultValue>
            Highest score (dafault)
          </option>
          <option value="trending">Trending (recent votes count more)</option>
          <option value="modifieddesc">Date modified (newest first)</option>
          <option value="createdasc">Date created (oldest first)</option>
        </select>
      </SortSelect>
    </Block>
  );
};
