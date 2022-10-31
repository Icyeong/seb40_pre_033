import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';
import { voteQuestion } from '../../redux/actions/postAction';
import { useParams } from 'react-router-dom';

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
  const dispatch = useDispatch();
  const { id } = useParams();

  let question = useSelector((state) => state.questionReducer);

  const handleVoteQuestion = useCallback(() => {
    console.log('VOTE QUESTION');
    dispatch(voteQuestion(id));
  }, []);

  return (
    <Block>
      <button onClick={handleVoteQuestion}>
        <ArrowUpSvg />
      </button>
      <span>{question.vote}</span>
      <button onClick={handleVoteQuestion}>
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
