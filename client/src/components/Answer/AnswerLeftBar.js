import { useSelector } from 'react-redux';
import { Block } from '../Question/QuestionLeftBar';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';

export const AnswerLeftBar = (type) => {
  let question = useSelector((state) => state.questionReducer);
  const idx = type.idx;

  return (
    <Block>
      <button>
        <ArrowUpSvg />
      </button>
      <span>{question.comments[idx].vote}</span>
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
