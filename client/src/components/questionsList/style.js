import styled from 'styled-components';
import { Tags } from '../Common/Tags';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 300px - 24px);
  font-size: 17px;
  // Mobile
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  // Tablet
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const StyledQuestions = styled.div`
  flex: 1 1 80%;
  padding: 24px 0 24px 24px;
  // Mobile
  @media screen and (max-width: 640px) {
    padding: 24px 16px;
  }
  // Tablet
  @media screen and (max-width: 980px) {
    padding: 24px 16px;
  }

  > .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 23px;
    // Mobile
    @media screen and (max-width: 640px) {
      display: flex;
      flex: 1 auto !important;
    }
    > h1 {
      font-size: 27px;
      // Mobile
      @media screen and (max-width: 640px) {
        font-size: 22px;
      }
    }
  }
  > .sort {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 640px) {
      font-size: 15.4px;
      flex-direction: column !important;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
    }
    > .question-sort {
      > button {
        font-size: 12px;
        border: 1px solid hsl(210, 8%, 55%);
        padding: 8px 10px;
        color: hsl(210, 8%, 45%);
        @media screen and (max-width: 640px) {
          height: 35.44px;
          padding-left: 0.4em;
          padding-right: 0.4em;
          flex-direction: column-reverse;
        }
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
          background-color: hsl(210, 8%, 90%);
          color: hsl(210, 8%, 25%);
          border: 1px solid hsl(210, 8%, 55%);
          :not(:last-child) {
            border-right: none;
          }
        }
      }
    }
  }
  > .questions {
    display: flex;
    padding-left: 10px;
    padding-top: 15px;
    border-top: 1px solid hsl(210, 8%, 90%);
    font-size: 13px;
    // Mobile
    @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: column;
      padding: 16px;
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
      width: 100%;

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

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        // Mobile
        @media screen and (max-width: 640px) {
          font-size: 11px;
        }
      }
      > .question-information {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 15px;

        > .question__avatar--wrapper {
          margin-top: -5px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
          margin-top: 10px;

          // Mobile
          @media screen and (max-width: 640px) {
            gap: 4px;
            font-size: 12px;
          }
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
`;

export const AskQuestion = styled.div`
  width: 98.73px;
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
  // Mobile
  @media screen and (max-width: 640px) {
    gap: 30px;
    padding-left: 50px;
  }
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
