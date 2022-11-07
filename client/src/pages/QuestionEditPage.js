import styled from 'styled-components';
import { HeaderMargin } from '../components/Home/Header/HeaderMargin';
import { Footer } from '../components/Home/Footer/Footer';
import { Sidebar } from '../components/Home/Sidebar/Sidebar';
// import { Div } from './HomePage';
import '../components/SummerText/Summernote.css';
import 'jquery';
import { Header } from '../components/Home/Header/Header';
import { EditMain } from '../components/QuestioEdit/EditMain';
import { Div } from '../components/QuestioEdit/EditStyle';

export const QuestionEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const { qid } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const [title, setTitle] = useState(question.title);
  const [body, setBody] = useState('');
  const [textBody, setTextBody] = useState('');

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

  const handleEditQuestion = async () => {
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
      const res = await useFetch('PATCH', `/article/${qid}`, inputData);
      dispatch(editQuestion(res));

      console.log('EDIT QUESTION', res);
    }

    navigate(`/questions/${qid}`);
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


export const QuestionEditPage = () => {
  return (
    <div>
      <Top>
        <Header />
        <HeaderMargin />
        <Div>
          <Sidebar />
          <EditMain />
        </Div>
      </Top>
      <Footer></Footer>
    </div>
  );
};

export const Top = styled.div`
  display: flex;
  flex-flow: column wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 15px;
  border: 3px red solid;
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

