import styled from 'styled-components';
import { Tags } from '../Common/Tags';

export const ListWrapper = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1300px;
  font-size: 17px;
`;

export const StyledQuestions = styled.div`
  flex: 1 1 80%;
  margin: 0 0 0 4px;
  padding: 5px 23px;
  width: 80%;
  > .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;
    > h1 {
      font-size: 27px;
    }
  }
  > .sort {
    margin-bottom: 5px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    > .question-sort {
      > button {
        font-size: 12px;
        border: 1px solid hsl(210, 8%, 55%);
        padding: 10px;
        color: hsl(210,8%,45%);
        cursor: pointer;
        :first-child {
          border-radius: 3px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        :last-child {
          border-radius: 3px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        :not(:last-child) {
          border-right: none;
        }
        :hover {
        background-color: hsl(210, 8%, 97.5%);
        }
        &.is-selected {
          background-color: hsl(210,8%,90%);
          color: hsl(210,8%,25%);
          border: 1px solid hsl(210, 8%, 55%);
          :not(:last-child) {
          border-right: none;
          }
        }
      }
    }
  }
  > .questions {
    margin-left: -27px;
    display: flex;
    padding-left: 10px;
    padding-top: 15px;
    border-top: 1px solid hsl(210, 8%, 90%);
    font-size: 13px;
    not
    // Mobile
    @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: column;
    }
    > .post-summury {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 108px;
      flex-shrink: 0;
      margin-right: 10px;
      row-gap: 7px;
      column-gap: 4px;
      // Mobile
    @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: row;
      margin-left: 10px;
      margin-bottom: 5px;
      width: 100%;
    }
    }
    /* 클릭 시 색 변경 */
    &.is-selected {
      background-color: #e3e6e8;
      color: #3b4045;
      border: 1px solid hsl(210, 8%, 55%);
    }
    > .question-list {
      > .question-title {
        > a {
          color: hsl(206, 100%, 40%);
          font-size: 17px;
        // Mobile
        @media screen and (max-width: 640px) {
          font-size: 14.38px;
        }
        }
        > a:hover {
          color: hsl(206, 100%, 52%);
        }
      }

      > .question-content {
        margin: 10px;
        flex-direction: column;
        // Mobile
        @media screen and (max-width: 640px) {
          font-size: 11px;
        }
      }
      > .question-information {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        > .question__avatar--wrapper {
          margin-top: -5px;
          margin-bottom: 15px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          > img {
            margin: 2px 5px 0 0;
            width: 16px;
            height: 16px;
            border-radius: 3px;
            display: block;
          }
        }
      }
    }
  }
}
`;

export const AskQuestion = styled.div`
  width: 98px;
  height: 37.8px;
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  font-size: 13px;
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border-radius: 3px;
  display: flex;
  flex-direction: column-reverse;
  :hover {
    background-color: #0074cc;
  }
`;

export const QuestionTags = styled(Tags)`
  margin: 10px 10px 25px 10px;
  li {
    margin: -8px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  row-gap: 10px;
  column-gap: 30px;
  justify-content: space-between;
  margin: 20px 0;
  > .pagination {
    margin: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 27px;
      padding: 0 8px;
      color: hsl(210, 8%, 25%);
      border: 1px solid hsl(210, 8%, 85%);
      border-radius: 3px;
      font-size: 13px;
      cursor: pointer;
      :hover {
        background-color: hsl(210, 8%, 85%);
      }
    }
    & > li.active {
      border: none;
      color: #ffffff;
      background-color: hsl(27, 90%, 55%);
      cursor: default;
    }
    & > li:first-child,
    & > li:last-child {
      display: none;
      width: 50px;
    }
    & > li:nth-child(2),
    & > li:nth-last-child(2) {
      width: 50px;
    }
  }

  > .btn-per-page {
    display: flex;
    justify-content: row;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 27px;
      margin: 0 2px;
      padding: 0 8px;
      color: hsl(210, 8%, 25%);
      border: 1px solid hsl(210, 8%, 85%);
      border-radius: 3px;
      font-size: 13px;
      cursor: pointer;
      :hover {
        background-color: hsl(210, 8%, 85%);
      }
      &.btn-active {
        border: none;
        color: #ffffff;
        background-color: hsl(27, 90%, 55%);
        cursor: default;
      }
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      color: hsl(210, 8%, 25%);
      margin: 0 2px;
      padding: 0 8px;
    }
  }
`;
