// import { useDispatch, useSelector } from 'react-redux';
import { Block } from '../Question/QuestionLeftBar';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';
// import {
//   voteUpAnswer,
//   voteDownAnswer,
// } from '../../redux/actions/questionAction';
// import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

export const AnswerLeftBar = () => {
  // const dispatch = useDispatch();

  // let question = useSelector((state) => state.questionReducer);
  // const idx = type.idx;

  const [vote, setVote] = useState(0);

  const handleVoteUpAnswer = async () => {
    // const res = await useFetch(
    //   'GET',
    //   `/comment/${question.comments[idx].commentId}/like`
    // );
    // dispatch(voteUpAnswer(res));

    // console.log('VOTE UP ANSWER', res);

    setVote(vote + 1);
  };

  const handleVoteDownAnswer = async () => {
    // const res = await useFetch(
    //   'GET',
    //   `/comment/${question.comments[idx].commentId}/dislike`
    // );
    // dispatch(voteDownAnswer(res));

    // console.log('VOTE DOWN ANSWER', res);

    setVote(vote - 1);
  };

  return (
    <Block>
      <button onClick={handleVoteUpAnswer}>
        <ArrowUpSvg />
      </button>
      <span>{vote}</span>
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
