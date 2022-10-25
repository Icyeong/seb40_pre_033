import styled from 'styled-components';
import {
  ArrowDownSvg,
  ArrowUpSvg,
  BookmarkSvg,
  HistorySvg,
} from '../../assets/images/QuestionSvg';

const Block = styled.div`
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
    color: #6a737c;
  }

  button:nth-child(4) {
    padding: 6px 0;
  }
  button:nth-child(5) {
    margin: 2px 11.5px;
    padding: 6px 0;
  }
`;

export const QuestionLeftBar = () => {
  return (
    <Block>
      <button>
        <ArrowUpSvg />
      </button>
      <span>0</span>
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
