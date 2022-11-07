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
import useFetch from '../../hooks/useFetch';

export const AnswerLeftBar = (type) => {
  const dispatch = useDispatch();

  let question = useSelector((state) => state.questionReducer);
  const idx = type.idx;

  const handleVoteUpAnswer = async () => {
    console.log('VOTE UP ANSWER');

    const res = await useFetch(
      'GET',
      `/comment/${question.comments[idx].commentId}/like`
    );
    dispatch(voteUpAnswer(res));
  };

  const handleVoteDownAnswer = async () => {
    console.log('VOTE DOWN ANSWER');

    const res = await useFetch(
      'GET',
      `/comment/${question.comments[idx].commentId}/dislike`
    );
    dispatch(voteDownAnswer(res));
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
