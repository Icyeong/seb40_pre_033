import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HasErrorSvg } from '../../assets/images/LoginSvg';
import useFetch from '../../hooks/useFetch';
import { editQuestion } from '../../redux/actions/questionsAction';
// import { BlueButton } from '../Common/BlueButton';
import { Block, BlueButton } from './EditStyle';
import { CancelButton } from '../Common/CancelButton';
// import { Wrapper } from '../Home/Sidebar/Dropdown_style';
// import { EditWidget } from '../Home/SidebarWidget/EditWidget';
// import { AnswerWidget } from '../AnswerEdit/AnswerWidget';
import { QEditWidget } from './QEditWidget';
import { ErrorMessage } from '../Question/ErrorMessage';
import {
  AskText1,
  AsWrapper,
  Box,
  Button,
  EditUserWrite,
  MainContents,
  SummerNoteWrapper,
  TagBox,
  TagInput,
  TagItem,
  TitleInput,
} from '../WriteEdit/style';
import {
  AskTitle,
  BodyErrorIcon,
  ButtonWrapper,
  TagsErrorIcon,
  TitleErrorIcon,
} from './EditStyle';
import ReactSummernoteLite from '@easylogic/react-summernote';

export const EditMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const { qid } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const [title, setTitle] = useState(question.title);
  const [body, setBody] = useState('');

  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['임시']);

  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [tagsError, setTagsError] = useState(false);

  // const inputData = { title, content: body, tags };
  const inputData = { title, content: body };

  useEffect(() => {
    bodyRef.current.querySelector('.note-editable').innerHTML =
      question.content;
  }, []);

  useEffect(() => {
    console.log('#2', bodyRef.current.querySelector('.note-editable'));
  });

  const handleEditQuestion = async () => {
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

      const res = await useFetch('PATCH', `/questions/${qid}`, inputData);
      console.log('edit question res', res);
      dispatch(editQuestion(res));

      navigate(`/questions/${qid}`);
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
    <Block>
      <AsWrapper>
        <AskTitle>
          <p>Your edit will be placed in a queue until it is peer reviewed.</p>
          <p>
            We welcome edits that make the post easier to understand and more
            valuable for readers. Because community members review edits, please
            try to make the post substantially better than how you found it, for
            example, by fixing grammar or adding additional resources and
            hyperlinks.
          </p>
        </AskTitle>
        <MainContents>
          <EditUserWrite>
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
          </EditUserWrite>
          <QEditWidget />
        </MainContents>
        <ButtonWrapper>
          <BlueButton onClick={handleEditQuestion}>Save Edits</BlueButton>
          <CancelButton>
            <Link to={`/questions/${qid}`}>Cancel</Link>
          </CancelButton>
        </ButtonWrapper>
      </AsWrapper>
    </Block>
  );
};
