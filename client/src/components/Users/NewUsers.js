import styled from 'styled-components';
import { useState } from 'react';

// const nameList = ['Reputation', 'Creation', 'Name', 'Modified'];

const Container = styled.div`
  display: flex;
  /* border: 1px solid yellowgreen; */
  flex-direction: column-reverse;
  align-items: flex-end;
  @media screen and (max-width: 980px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  > .sort {
    /* 우측 정렬 */
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 640px) {
      font-size: 15.4px;
      flex-direction: column !important;
      align-items: flex-start;
      gap: 10px;
    }
    > .user-sort {
      display: flex;
      > button {
        font-size: 12px;
        padding: 8px 10px;
        color: hsl(210, 8%, 45%);
        @media screen and (max-width: 640px) {
          height: 35.44px;
          padding-left: 0.4em;
          padding-right: 0.4em;
          flex-direction: column-reverse;
        }
        cursor: pointer;
        :hover {
          border-bottom: 1px solid hsl(27, 90%, 55%);
        }
        &.is-clicked {
          border-bottom: 1px solid hsl(27, 90%, 55%);
          font-weight: 700;
        }
      }
    }
  }
`;
export const NewUsers = () => {
  // ✨ 정렬
  const [clicked, setclicked] = useState('creation date');
  // redux?
  const sortClick = (e) => {
    switch (e.target.value) {
      case 'reputation':
        setclicked('reputation');
        break;
      case 'creation date':
        setclicked('creation date');
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <div className="sort">
        <div className="user-sort">
          <button
            type="button"
            className={clicked === 'reputation' ? 'is-clicked' : ''}
            onClick={sortClick}
            value={'reputation'}
          >
            reputation
          </button>
          <button
            type="button"
            className={clicked === 'creation date' ? 'is-clicked' : ''}
            onClick={sortClick}
            value={'creation date'}
          >
            creation date
          </button>
        </div>
      </div>
    </Container>
  );
};
