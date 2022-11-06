import styled from 'styled-components';

export const AskTop = styled.div`
  height: 130.34px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const AskImg = styled.div`
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const AskTitle = styled.div`
  width: 100%;
  height: 100px;
  font-size: 27px;
  font-weight: 650;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
  }
`;

export const SidebarBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const Sidebarbox2 = styled.div`
  box-shadow: 0px 0px 4px #d6d9dc;
  height: auto;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const Sidebarwidget = styled.div`
  padding: 15px 15px 15px 20px;
  color: #525060;
  background-color: #f8f9f9;
  font-size: 15px;
  box-shadow: 0px 0px 4px #d6d9dc;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;
export const Sidebarwidget2 = styled.div`
  margin: 0px 0px 10px 0px;
  font-size: 13px;
  /* border: 1px solid pink; */
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const TextList = styled.ul`
  margin-top: 15px;
  /* border: 1px solid red; */
  font-size: 13px;
  row-gap: 5px;
  padding: 0px 15px 0px 25px;
  li {
    list-style: disc;
  }
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const Sidebarwidget3 = styled.div`
  margin-top: 37px;
  font-weight: bold;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const TitleErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 51px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const TagsErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const AsWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 980px) {
    font-size: 22px;
  }
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const MainContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const ContentsUserWrite = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px 16px 16px 16px;
  /* border: 1px solid red; */
  background-color: #ffffff;
  border-radius: 0.8%;
  box-shadow: 0px 0px 4px #d6d9dc;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const ContentsUserHelp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0px 0px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const AskText2 = styled.div`
  width: 600px;
  height: 100%;
  font-size: 12px;
  /* border: solid pink; */
  display: flex;
  justify-content: left;
  align-items: baseline;
  margin: 0px 0px 10px 0px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 32.57px;
  padding: 8px 10px;
  border: 1px solid var(--bc-darker);
  border-radius: var(--br-sm);
  background-color: white;
  color: var(--fc-dark);
  font-size: 13px;
  border-radius: 2px;

  &.error {
    border: 1px solid rgb(222, 79, 84);
    outline: rgb(249, 210, 211) solid 4px;
  }

  &:focus {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    border: none;
    outline: 0;
  }
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const Box = styled.div`
  position: relative;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const Userwrite = styled.div`
  font-size: 14px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
  /* border: solid black 5px; */
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 38px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid var(--bc-darker);
  border-radius: var(--br-sm);

  &.error {
    border: 1px solid rgb(222, 79, 84);
    outline: rgb(249, 210, 211) solid 4px;
  }

  &:focus-within {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    border: none;
    outline: 0;
  }
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const TagInput = styled.input`
  border: 1px solid red;
  cursor: text;
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: rgb(225, 236, 244);
  border-radius: 5px;
  color: rgb(57, 115, 157);
  font-size: 12px;
  font-weight: 620;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 50%;
  color: rgb(57, 115, 157);
  font-weight: 620;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const SummerNoteWrapper = styled.div`
  &.error {
    border: 1px solid rgb(222, 79, 84);
    outline: rgb(249, 210, 211) solid 4px;
    @media screen and (max-width: 940px) {
      background-image: none;
      width: 100%;
    }
  }
`;

export const BodyErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 214px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;
