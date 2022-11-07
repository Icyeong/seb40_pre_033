// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';
// import {
//   voteUpQuestion,
//   voteDownQuestion,
// } from '../../redux/actions/questionAction';
// import { useParams } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;

  button:nth-child(1),
  button:nth-child(3),
  span {
    margin: 2px;
  }
  span {
    font-size: 21px;
    color: var(--black-500);
  }

  button:nth-child(4) {
    padding: 6px 0;
  }
  button:nth-child(5) {
    margin: 2px 11.5px;
    padding: 6px 0;
  }

  // Mobile
  @media screen and (max-width: 640px) {
    span {
      font-size: 19.8px;
    }
  }
`;

export const QuestionLeftBar = () => {
  // const dispatch = useDispatch();
  // const { qid } = useParams();

  // let question = useSelector((state) => state.questionReducer);

  const [vote, setVote] = useState(0);

  const handleVoteUpQuestion = async () => {
    // const res = await useFetch('GET', `/article/${qid}/like`);
    // dispatch(voteUpQuestion(res));

    // console.log('VOTE UP QUESTION', res);

    setVote(vote + 1);
  };

  const handleVoteDownQuestion = async () => {
    // const res = await useFetch('GET', `/article/${qid}/dislike`);
    // dispatch(voteDownQuestion(res));

    // console.log('VOTE DOWN QUESTION', res);

    setVote(vote - 1);
  };

  return (
    <Block>
      <button onClick={handleVoteUpQuestion}>
        <ArrowUpSvg />
      </button>
      <span>{vote}</span>
      <button onClick={handleVoteDownQuestion}>
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
