import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { HasErrorSvg } from '../../assets/images/LoginSvg';
import useFetch from '../../hooks/useFetch';
import { addQuestion } from '../../redux/actions/questionsAction';
import { PostAnswerButton } from '../Answer/AnswerWrite';
import { Wrapper } from '../Home/Sidebar/Dropdown_style';
import { ErrorMessage } from '../Question/ErrorMessage';
import {
  AskImg,
  AskText1,
  AskText2,
  AskTitle,
  AskTop,
  BodyErrorIcon,
  Box,
  Button,
  ContentsUserHelp,
  ContentsUserWrite,
  MainContents,
  SidebarBox,
  Sidebarbox2,
  Sidebarwidget,
  Sidebarwidget2,
  Sidebarwidget3,
  SummerNoteWrapper,
  TagBox,
  TagInput,
  TagItem,
  TagsErrorIcon,
  TextList,
  TitleErrorIcon,
  TitleInput,
} from './style';
import ReactSummernoteLite from '@easylogic/react-summernote';

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
                Include all the information someone would need to answer your
                question
              </AskText2>
              <SummerNoteWrapper ref={bodyRef}>
                <ReactSummernoteLite
                  id="sample"
                  height={300}
                  onBlur={() => {
                    setBody(
                      bodyRef.current.querySelector('.note-editable').innerHTML
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
  );
};
