import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../redux/actions/questionsAction';
import '../components/SummerText/Summernote.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';
import { useState, useRef, useEffect } from 'react';
import { ErrorMessage } from '../components/Question/ErrorMessage';
import { HasErrorSvg } from '../assets/images/LoginSvg';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { PostAnswerButton } from '../components/Answer/AnswerWrite';

//써머노트 install 명령어 "npm install summernote"

export const QuestionWritePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [textBody, setTextBody] = useState();

  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [tagsError, setTagsError] = useState(false);

  // const inputData = { title, content: body, tags };
  const inputData = { title, content: body };

  useEffect(() => {
    console.log('#2', bodyRef.current.querySelector('.note-editable'));
  });

  const handleAddQuestion = async () => {
    setTitleError(false);
    setBodyError(false);
    setTagsError(false);

    titleRef.current.classList.remove('error');
    bodyRef.current.classList.remove('error');
    tagsRef.current.classList.remove('error');

    // 유효성 검사
    if (title.length < 15 || textBody.length < 30 || tags.length < 1) {
      if (title.length < 15) {
        setTitleError(true);
        titleRef.current.classList.add('error');
      }
      if (textBody.length < 30) {
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

      const res = await useFetch('POST', '/article', inputData);
      console.log('add question res', res);
      dispatch(addQuestion(res));

      navigate('/');
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
        <HeaderMargin></HeaderMargin>
        <Wrapper>
          <AsWrapper>
            <AskImg>
              <AskTitle>Ask public Question </AskTitle>
              <AskTop></AskTop>
            </AskImg>
            <MainContents>
              <ContentsUserWrite>
                <Box>
                  <AskText1>Title</AskText1>
                  <AskText2>
                    Be specific and imagine you’re asking a question to another
                    person
                  </AskText2>
                  <TitleInput
                    type="text"
                    className="TitleInput"
                    placeholder="e.g Is there an R function for finding the index of an element in a vector?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                  <AskText2>
                    Include all the information someone would need to answer
                    your question
                  </AskText2>
                  <SummerNoteWrapper ref={bodyRef}>
                    <ReactSummernoteLite
                      id="sample"
                      height={300}
                      onBlur={() => {
                        setBody(
                          bodyRef.current.querySelector('.note-editable')
                            .innerHTML
                        );
                        setTextBody(
                          bodyRef.current.querySelector('.note-editable')
                            .innerText
                        );
                        bodyRef.current.style = '';
                      }}
                      onFocus={() => {
                        bodyRef.current.style =
                          'box-shadow: 0px 0px 3px 3px rgba(107, 186, 247, 0.5); border: none; outline: 0;';
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
                  <AskText2>
                    Add up to 5 tags to describe what your question is about
                  </AskText2>
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
                <SidebarBox>
                  <Sidebarbox2>
                    <Sidebarwidget>Step 1: Draft your question</Sidebarwidget>
                    <Sidebarwidget>
                      <Sidebarwidget2>
                        The community is here to help you with specific coding,
                        algorithm, or language problems.
                      </Sidebarwidget2>
                      <Sidebarwidget2>
                        Avoid asking opinion-based questions.
                      </Sidebarwidget2>
                      <Sidebarwidget3>Summarize the problems</Sidebarwidget3>
                      <TextList>
                        <li>Include details abot your goal</li>
                        <li>Describe expected and actual results</li>
                        <li>Include any error messages</li>
                      </TextList>
                    </Sidebarwidget>
                  </Sidebarbox2>
                </SidebarBox>
              </ContentsUserHelp>
            </MainContents>
            <PostAnswerButton onClick={handleAddQuestion}>
              Post your Question
            </PostAnswerButton>
          </AsWrapper>
        </Wrapper>
      </Top>
      <Footer></Footer>
    </div>
  );
};

//스타일드 컴포넌트 (나중에 컴포넌트로 이동하기)
const Top = styled.div`
  background-color: rgb(242, 242, 243);
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;

  // Mobile
  @media screen and (max-width: 640px) {
    > h2 {
      font-size: 14.3846px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 24px 24px;

  // Mobile
  @media screen and (max-width: 640px) {
    > h2 {
      font-size: 14.3846px;
    }
  }
`;

export const AsWrapper = styled.div`
  width: 100%;
`;

const AskTop = styled.div`
  width: 600px;
  height: 130.34px;
  background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-repeat: no-repeat;
`;

const AskImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AskTitle = styled.div`
  width: 400px;
  height: 100px;
  font-size: 27px;
  font-weight: 650;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const MainContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 5px solid red; */
`;

export const ContentsUserWrite = styled.div`
  width: 827px;
  margin-bottom: 16px;
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
  margin: 10px 0px 0px;
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
`;

export const Box = styled.div`
  position: relative;
`;

export const Userwrite = styled.div`
  font-size: 14px;
`;

export const SummerNotePreview = styled.div`
  width: 100%;
  height: 300px;
  /* border: solid black 5px; */
`;

const SidebarBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: center;
`;

const Sidebarbox2 = styled.div`
  box-shadow: 0px 0px 4px #d6d9dc;
  height: auto;
`;

const Sidebarwidget = styled.div`
  padding: 15px 15px 15px 20px;
  color: #525060;
  background-color: #f8f9f9;
  font-size: 15px;
  box-shadow: 0px 0px 4px #d6d9dc;
`;
const Sidebarwidget2 = styled.div`
  margin: 0px 0px 10px 0px;
  font-size: 13px;
  /* border: 1px solid pink; */
`;

const TextList = styled.ul`
  margin-top: 15px;
  /* border: 1px solid red; */
  font-size: 13px;
  row-gap: 5px;
  padding: 0px 15px 0px 25px;
  li {
    list-style: disc;
  }
`;

const Sidebarwidget3 = styled.div`
  margin-top: 37px;
  font-weight: bold;
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
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
`;

export const Text = styled.span``;

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
`;

export const SummerNoteWrapper = styled.div`
  &.error {
    border: 1px solid rgb(222, 79, 84);
    outline: rgb(249, 210, 211) solid 4px;
  }
`;

const TitleErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 51px;
`;

export const BodyErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 214px;
`;

const TagsErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
`;
