import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { EditWidget } from '../components/Home/SidebarWidget/EditWidget';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
import { Block } from './HomePage';
import { BlueButton } from '../components/Common/BlueButton';
import { CancelButton } from '../components/Common/CancelButton';
import '../components/SummerText/Summernote.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';
import {
  AskText1,
  AsWrapper,
  Box,
  Button,
  ContentsUserHelp,
  ContentsUserWrite,
  MainContents,
  TagBox,
  TagInput,
  TagItem,
  Text,
  TitleInput,
  Wrapper,
} from './QuestionWritePage';
import { useDispatch, useSelector } from 'react-redux';
import { editQuestion } from '../redux/actions/questionsAction';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export const QuestionEditPage = () => {
  const dispatch = useDispatch();
  const { qid } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const [title, setTitle] = useState(question.title);
  const [body, setBody] = useState(question.content);

  const [tagInput, setTagInput] = useState('');
  const [tagArr, setTagArr] = useState(question.tags);

  const inputData = { title, body, tagArr };

  const handleEditQuestion = () => {
    console.log('ADD QUESTION');
    console.log(inputData);
    dispatch(editQuestion(qid, inputData));
  };

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
                    <TitleInput
                      type="text"
                      className="TitleInput"
                      placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Box>
                  <Box>
                    <AskText1>Body</AskText1>
                    <ReactSummernoteLite
                      id="sample"
                      height={350}
                      value={body}
                      onChange={(e) => {
                        console.log(e);
                        setBody(e);
                      }}
                    />
                  </Box>
                  <Box>
                    <AskText1>Tags</AskText1>
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
              <ButtonWrapper>
                <BlueButton onClick={handleEditQuestion}>Save Edits</BlueButton>
                <CancelButton>
                  <Link to={`/questions/${qid}`}>Cancel</Link>
                </CancelButton>
              </ButtonWrapper>
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

export const AskTitle = styled.div`
  border: 1px solid red;
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

export const ButtonWrapper = styled.div`
  padding: 12px 0 16px 0;
`;
