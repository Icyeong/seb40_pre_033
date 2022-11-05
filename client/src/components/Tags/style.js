import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 30%;
  width: 90%;
  border: 4px solid blue;

  > .title {
    margin-bottom: 10px;

    // Mobile
    @media screen and (max-width: 640px) {
      display: flex;
      flex: 1 auto !important;
    }
    > h1 {
      font-size: 27px;
      margin-bottom: 16px;
      // Mobile
      @media screen and (max-width: 640px) {
        font-size: 22px;
        margin-bottom: 16px;
      }
    }
    > p {
      display: block;
      font-size: 15px;
      white-space: normal;
      overflow: auto;
    }
    > a {
      border: 1px solid red;
    }
  }
`;

export const Tagslist = styled.div`
  width: 100%;
  height: 40%;
  border: 1px red solid;
  margin-top: 10px;
`;

export const Tagbox = styled.div`
  width: 30%;
  height: 86%;
  border: 2px black solid;
  margin: 12px;
  overflow: auto;

  > .title {
    width: 50%;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin: 12px 0px 12px 0px;
  }

  > .body {
    width: 80%;
    border: 2px solid red;
    overflow: auto;
  }

  > .click {
    width: 50%;
    border: 1px purple solid;
    margin-top: 10px;
    font-size: 13px;
    display: flex;
    justify-content: center;
  }
`;
