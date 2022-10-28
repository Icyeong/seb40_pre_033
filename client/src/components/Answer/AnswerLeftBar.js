import { useSelector } from 'react-redux';
import { Block } from '../Question/QuestionLeftBar';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';

export const AnswerLeftBar = () => {
  let question = useSelector((state) => state.questionReducer);

  return (
    <Block>
      <button>
        <ArrowUpSvg />
      </button>
      <span>{question.comments[0].vote}</span>
      <button>
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
