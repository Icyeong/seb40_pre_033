import { useDispatch, useSelector } from 'react-redux';
import { Block } from '../Question/QuestionLeftBar';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';
import {
  voteUpAnswer,
  voteDownAnswer,
} from '../../redux/actions/questionAction';

export const AnswerLeftBar = (type) => {
  const dispatch = useDispatch();

  let question = useSelector((state) => state.questionReducer);
  const idx = type.idx;

  const handleVoteUpAnswer = () => {
    console.log('VOTE UP ANSWER');
    dispatch(voteUpAnswer(question.comments[idx].comment_id));
  };

  const handleVoteDownAnswer = () => {
    console.log('VOTE DOWN ANSWER');
    dispatch(voteDownAnswer(question.comments[idx].comment_id));
  };

  return (
    <Block>
      <button onClick={handleVoteUpAnswer}>
        <ArrowUpSvg />
      </button>
      <span>{question.comments[idx].vote}</span>
      <button onClick={handleVoteDownAnswer}>
        <ArrowDownSvg />
      </button>
      <button>
        <BookmarkSvg />
      </button>
      <button>
        <HistorySvg />
      </button>
    </Block>
  );
};
