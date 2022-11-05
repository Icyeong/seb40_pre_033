import styled from 'styled-components';

export const HeaderWrapper = styled.div`
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
      width: 100%;
      color: hsl(206, 100%, 40%);
      margin: calc(6 / 2);
    }
  }
`;

export const Body = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .box {
    padding: 12px;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    background-color: white;
  }
  .container {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 2fr);
    grid-gap: 12px;
  }
  .name {
    display: flex;
    width: 30%;
    height: 12%;
    align-items: center !important;
    justify-content: space-between !important;
    border: 2px pink solid;
    color: #39739d;
    background-color: #e1ecf4;
    margin: 2px 2px 2px 0px;
    padding: 4.8px 6px;
  }
`;
