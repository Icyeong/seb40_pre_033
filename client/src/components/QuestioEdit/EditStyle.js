import styled from 'styled-components';

export const TitleErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 51px;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const BodyErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 214px;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const TagsErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const AskTitle = styled.div`
  width: 87.5%;
  max-height: 119px;
  /* margin-bottom: 30px;
  margin-top: 15px;
  margin-left: 15px; */
  padding: 16px;
  color: rgb(59, 64, 69);
  background-color: rgb(253, 247, 226);
  border: 1px solid rgb(230, 207, 121);
  border-radius: 3px;
  font-size: 13px;
  /* line-height: 17px; */
  display: flex;
  flex-direction: column;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 940px) {
    width: 87.5%;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 14px 0px 20px 12px;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const BlueButton = styled.button`
  height: 30px;
  width: 80px;
  margin: 0 -10px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 13px;
  color: var(--theme-button-primary-color);
  background-color: var(--theme-button-primary-background-color);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

  a {
    padding: 10.4px;
  }

  &:active,
  &:hover,
  &:focus {
    color: var(--theme-button-primary-hover-color);
    background-color: var(--theme-button-primary-hover-background-color);
  }

  &:active {
    background-color: var(
      --theme-button-primary-active-background-color
    ) !important;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-flow: column nowrap;

  > div {
    color: hsl(210, 8%, 35%);
    font-size: 11px;
    margin: 20px;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
`;
