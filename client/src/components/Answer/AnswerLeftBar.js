import { useDispatch, useSelector } from 'react-redux';
import { Block } from '../Question/QuestionLeftBar';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';
import { useParams } from 'react-router-dom';
import { voteAnswer } from '../../redux/actions/questionAction';
import { useCallback } from 'react';

export const AnswerLeftBar = (type) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let question = useSelector((state) => state.questionReducer);
  const idx = type.idx;

  const handleVoteAnswer = useCallback(() => {
    console.log('VOTE ANSWER');
    dispatch(voteAnswer(id, question.comments[idx].comment_id));
  }, []);

  return (
    <Block>
      <button onClick={handleVoteAnswer}>
        <ArrowUpSvg />
      </button>
      <span>{question.comments[idx].vote}</span>
      <button onClick={handleVoteAnswer}>
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
