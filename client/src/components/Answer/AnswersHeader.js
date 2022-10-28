import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 8px 0;

  h2 {
    font-size: 19px;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 16.0769px;
    }
  }
`;

const SortSelect = styled.div`
  display: flex;
  position: relative;

  label {
    font-size: 12px;
    margin-right: 5px;
  }
  select {
    padding: 7.8px 32px 7.8px 9.1px;
    border: 1px solid var(--bc-darker);
    border-radius: 3px;
    font-size: 13px;
    color: var(--fc-dark);
    appearance: none;
    outline: 0;

    &:focus {
      border-color: hsl(205, 47%, 42%);
      box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
      color: var(--black);
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
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

  // Mobile
  @media screen and (max-width: 640px) {
    flex-direction: column;

    label {
      width: 100%;
      margin-bottom: 4px;
    }

    &:before {
      top: calc(50% + 5px);
    }
    &:after {
      top: calc(50% + 11px);
    }
  }
`;

export const AnswersHeader = () => {
  let question = useSelector((state) => state.questionReducer);

  return (
    <Block>
      <h2>{question.comments.length} Answers</h2>
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
