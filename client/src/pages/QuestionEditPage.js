import styled from 'styled-components';
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
  SummerNoteWrapper,
  TagBox,
  TagInput,
  TagItem,
  Text,
  TitleInput,
  Wrapper,
} from './QuestionWritePage';
import { useDispatch } from 'react-redux';
// import { editQuestion } from '../redux/actions/questionsAction';
import { Link, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { addQuestion } from '../redux/actions/questionsAction';
import { ErrorMessage } from '../components/Question/ErrorMessage';
import { HasErrorSvg } from '../assets/images/LoginSvg';
import { Header } from '../components/Home/Header/Header';

export const QuestionEditPage = () => {
  const dispatch = useDispatch();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const { qid } = useParams();

  // let question = useSelector((state) => state.questionReducer);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [tagsError, setTagsError] = useState(false);
  const inputData = { title, content: body, tags };

  const handleEditQuestion = () => {
    setTitleError(false);
    setBodyError(false);
    setTagsError(false);

    titleRef.current.classList.remove('error');
    bodyRef.current.classList.remove('error');
    tagsRef.current.classList.remove('error');

    // 유효성 검사
    if (title.length < 15 || body.length < 30 || tags.length < 1) {
      if (title.length < 15) {
        setTitleError(true);
        titleRef.current.classList.add('error');
      }
      if (body.length < 30) {
        setBodyError(true);
        bodyRef.current.classList.add('error');
      }
      if (tags.length < 1) {
        setTagsError(true);
        tagsRef.current.classList.add('error');
      }
    } else {
      console.log('ADD QUESTION');
      console.log(inputData);
      dispatch(addQuestion(inputData));
    }
  };

  const TagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTagInput = (e) => {
    const filtered = tags.filter((el) => el === e.target.value);
    if (e.key === 'Enter' && e.target.value !== '' && filtered.length === 0) {
      setTags([...tags, e.target.value]);
      setTagInput('');
      console.log(tags);
    }
  };

  const deleteTags = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tags.filter((tagItem) => tagItem !== deleteTagItem);
    setTags(filteredTagList);
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
                      ref={titleRef}
                    />
                    {titleError && (
                      <>
                        <ErrorMessage text="Title must be at least 15 characters." />
                        <TitleErrorIcon>
                          <HasErrorSvg />
                        </TitleErrorIcon>
                      </>
                    )}
                  </Box>
                  <Box>
                    <AskText1>Body</AskText1>
                    <SummerNoteWrapper ref={bodyRef}>
                      <ReactSummernoteLite
                        id="sample"
                        height={300}
                        value={body}
                        onChange={(e) => {
                          console.log(e);
                          setBody(e);
                        }}
                      />
                    </SummerNoteWrapper>
                    {bodyError && (
                      <>
                        <ErrorMessage text="Body must be at least 30 characters." />
                        <BodyErrorIcon>
                          <HasErrorSvg />
                        </BodyErrorIcon>
                      </>
                    )}
                  </Box>
                  <Box>
                    <AskText1>Tags</AskText1>
                    <TagBox ref={tagsRef}>
                      {tags.map((tagItem, index) => {
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
                        tags={tags}
                        onClick={deleteTags}
                      />
                    </TagBox>
                    {tagsError && (
                      <>
                        <ErrorMessage text="Please enter at least one tag; see a list of popular tags." />
                        <TagsErrorIcon>
                          <HasErrorSvg />
                        </TagsErrorIcon>
                      </>
                    )}
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

const TitleErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 51px;
`;

const BodyErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 214px;
`;

const TagsErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
`;
