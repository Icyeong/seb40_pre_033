import { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import LabTest from '../components/SummerNote/SummerText/LabTest';
import { Block } from './HomePage';
// import { useSelector } from 'react-redux';

//써머노트 install 명령어 "npm install summernote"

export const QuestionEditPage = () => {
  //질문 작성 공간 글 하단에 똑같이 보여지는 기능
  const [useWrite, setUseWrite] = useState('');
  const [tagInput, setTagInput] = useState('');
  // let question = useSelector((state) => state.questionReducer);
  const initags = ['python', 'ios'];
  const [tagArr, setTagArr] = useState(initags);

  const TagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTagInput = (e) => {
    const filtered = tagArr.filter((el) => el === e.target.value);
    if (e.key === 'Enter' && e.target.value !== '' && filtered.length === 0) {
      setTagArr([...tagArr, e.target.value]);
      setTagInput('');
      console.log(tagArr);
    }
  };

  const deleteTags = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagArr.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagArr(filteredTagList);
  };

  const userWriteFunction = (e) => {
    setUseWrite(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin />
        <Block>
          <Sidebar />
          <Wrapper>
            <AsWrapper>
              <AskTitle>
                <p>
                  Your edit will be placed in a queue until it is peer reviewed.
                </p>
                <p>
                  We welcome edits that make the post easier to understand and
                  more valuable for readers. Because community members review
                  edits, please try to make the post substantially better than
                  how you found it, for example, by fixing grammar or adding
                  additional resources and hyperlinks.
                </p>
              </AskTitle>
              <MainContents>
                <ContentsUserWrite>
                  <Box>
                    <AskText1>Title</AskText1>
                    <AskText2>
                      Be specific and imagine you’re asking a question to person
                    </AskText2>
                    <TitleInput
                      type="text"
                      className="TitleInput"
                      placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                      onChange={(e) => userWriteFunction(e)}
                    />
                  </Box>
                  <Box>
                    <AskText1>Body</AskText1>
                    <AskText2>
                      Include all the information someone would need to answer
                      your question
                    </AskText2>
                    <SummerNotePreview>
                      <LabTest />
                    </SummerNotePreview>
                  </Box>
                  <Userwrite>{useWrite}</Userwrite>
                  <Box>
                    <AskText1>Tags</AskText1>
                    <AskText2>
                      Add up to 5 tags to describe what your question is about
                    </AskText2>
                    <TagBox>
                      {tagArr.map((tagItem, index) => {
                        return (
                          <TagItem key={index}>
                            <Text>{tagItem}</Text>
                            <Button onClick={deleteTags}>X</Button>
                          </TagItem>
                        );
                      })}
                      <TagInput
                        type="text"
                        className="TitleInput"
                        placeholder="e.g (c linux r)"
                        value={tagInput}
                        onChange={(e) => TagInputChange(e)}
                        onKeyUp={(e) => addTagInput(e)}
                        tagArr={tagArr}
                        onClick={deleteTags}
                      />
                    </TagBox>
                  </Box>
                </ContentsUserWrite>
                <ContentsUserHelp>
                  <EditWidget />
                </ContentsUserHelp>
              </MainContents>
              <Reviewbutton>Save Edits</Reviewbutton>
              <Reviewbutton2>Cancel</Reviewbutton2>
            </AsWrapper>
          </Wrapper>
        </Block>
      </Top>
      <Footer></Footer>
    </div>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
export const Top = styled.div`
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 24px 24px;
`;

export const AsWrapper = styled.div`
  width: 100%;
`;

export const AskTitle = styled.div`
  width: 827px;
  height: 119px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 16px;
  color: rgb(59, 64, 69);
  background-color: rgb(253, 247, 226);
  border: 1px solid rgb(230, 207, 121);
  border-radius: 3px;
  font-size: 13px;
  line-height: 17px;
`;

export const MainContents = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

export const ContentsUserWrite = styled.div`
  width: 827px;
  padding: 16px 16px 16px 16px;
  /* border: 1px solid red; */
  background-color: #ffffff;
  border-radius: 0.8%;
  box-shadow: 0px 0px 4px #d6d9dc;
`;

export const ContentsUserHelp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const AskText1 = styled.div`
  width: 400px;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 15px 0px 0px;
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
  &:focus {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    border: none;
    outline: 0;
  }
  border-radius: 2px;
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: 1px solid var(--bc-darker);
  border-radius: var(--br-sm);
  &:focus-within {
    box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5);
    border: none;
    outline: 0;
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
`;

const TagItem = styled.div`
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
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 50%;
  color: rgb(57, 115, 157);
  font-weight: 620;
`;

export const Box = styled.div``;

export const Reviewbutton = styled.button`
  width: 90px;
  height: 32px;
  background-color: #0a95ff;
  border: solid #0a95ff;
  font-size: 13.6px;
  color: white;
  margin-top: 20px;
  margin-bottom: 50px;

  border-radius: 4px;
  /* box-shadow: 0px 0px 2px 2px rgba(107, 186, 247, 0.5); */
`;

export const Reviewbutton2 = styled.button`
  width: 90px;
  height: 32px;
  font-size: 13.6px;
  color: #0a95ff;
  margin-top: 20px;
  margin-bottom: 50px;
  border-radius: 4px;
`;

export const Userwrite = styled.div`
  font-size: 14px;
`;

export const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
`;
