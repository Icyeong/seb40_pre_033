import styled from 'styled-components';
import { Header } from '../components/Home/Header/Header';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../redux/actions/questionsAction';
import '../components/SummerText/Summernote.css';
import 'jquery';
import ReactSummernoteLite from '@easylogic/react-summernote';
import { useState, useRef } from 'react';
import { ErrorMessage } from '../components/Question/ErrorMessage';
import { HasErrorSvg } from '../assets/images/LoginSvg';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { PostAnswerButton } from '../components/Answer/AnswerWrite';

export const QuestionWritePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [textBody, setTextBody] = useState('');

  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [tagsError, setTagsError] = useState(false);

  const inputData = { title, content: body, tags };

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
      const res = await useFetch('POST', '/article', inputData);
      // console.log('#1', inputData);
      dispatch(addQuestion(res));

      // console.log('ADD QUESTION', res);

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
          <div>
            <AskImg>
              <AskTop>
                <AskTitle>Ask public Question </AskTitle>
              </AskTop>
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
                          <div>{tagItem}</div>
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
          </div>
        </Wrapper>
      </Top>
      <Footer></Footer>
    </div>
  );
};

const Top = styled.div`
  background-color: rgb(242, 242, 243);
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;

  // Mobile
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 24px 24px;

  // Mobile
`;

export const AsWrapper = styled.div`
  width: 100%;
`;
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
  @media screen and (max-width: 840px) {
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

export const MainContents = styled.div`
  width: 100%;
  display: flex;
  margin-left: -15px;
  /* justify-content: center; */
  /* border: 5px solid red; */
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;

export const ContentsUserWrite = styled.div`
  max-width: 767px;
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
    display: none;
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

export const SidebarBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const Sidebarbox2 = styled.div`
  box-shadow: 0px 0px 4px #d6d9dc;
  height: auto;
  @media screen and (max-width: 940px) {
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
    height: 65%;
  }
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

export const TitleErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 51px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
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

export const TagsErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  @media screen and (max-width: 940px) {
    background-image: none;
    width: 100%;
  }
`;
