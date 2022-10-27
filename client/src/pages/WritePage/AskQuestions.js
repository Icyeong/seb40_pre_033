import { useState } from 'react';
import styled from 'styled-components';
import askImg from './img/background.svg';
function AskQuestions() {
  const [useWrite, setUseWrite] = useState('');
  const userWriteFunction = (e) => {
    setUseWrite(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Wrapper>
      <AsWrapper>
        <AskTop>
          <AskTitle>Ask public Question</AskTitle>
          <AskImg />
        </AskTop>
        <MainContents>
          <ContentsUserWrite>
            <div>
              <AskText1>Title</AskText1>
              <AskText2>
                Be specific and imagine you’re asking a question to another
                person
              </AskText2>
              <TitleInput
                type="text"
                className="TitleInput"
                placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                onChange={(e) => userWriteFunction(e)}
              />
            </div>
            <div>바디</div>
            <div>사용자작성표시공간</div>
            <div>태그</div>
          </ContentsUserWrite>
          <ContentsUserHelp>
            <div>
              <div>Step 1: Draft your question</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div></div>
            </div>
            <div>
              <div>Have a non-programming question?</div>
              <div></div>
            </div>
            <div>
              <div>More helpful links</div>
              <div></div>
            </div>
          </ContentsUserHelp>
        </MainContents>
        <div>{useWrite}</div>
        <div>리뷰버튼클릭</div>
      </AsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 99%;
  height: 100vh;
  border: 3px solid red;
  display: flex;
  justify-content: center;
  background-color: rgb(242, 242, 243);
`;

const AsWrapper = styled.div`
  width: 80%;
  height: 100vh;
  border: 5px solid blue;
`;

const AskTop = styled.div`
  height: 130px;
  border: 3px solid yellowgreen;
  display: flex;
  justify-content: space-between;
`;

const AskTitle = styled.div`
  width: 400px;
  height: 100%;
  font-size: 27px;
  font-weight: bold;
  border: solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskImg = styled.img`
  background-image: url('${askImg}');
  background-repeat: no-repeat;
  width: 550px;
  height: 100%;
`;

const MainContents = styled.div`
  width: 100%;
  height: 600px;
  border: 5px solid red;
  display: flex;
  justify-content: space-between;
`;

const ContentsUserWrite = styled.div`
  width: 70%;
  height: 100%;
  border: 4px solid green;
`;

const ContentsUserHelp = styled.div`
  width: 25%;
  height: 100%;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
`;

const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  border: solid blue;
  display: flex;
  justify-content: left;
  align-items: baseline;
`;

const AskText2 = styled.div`
  width: 600px;
  height: 100%;
  font-size: 12px;
  border: solid pink;
  display: flex;
  justify-content: left;
  align-items: baseline;
`;
const TitleInput = styled.input`
  width: 70%;
  height: 30px;
`;
export default AskQuestions;
