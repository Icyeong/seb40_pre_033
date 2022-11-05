import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 30%;
  width: 90%;

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
      max-width: calc(8rem * 6);
    }
    > a {
      color: hsl(206, 100%, 40%);
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
`;
