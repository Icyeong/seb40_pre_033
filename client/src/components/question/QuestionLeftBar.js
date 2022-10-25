import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;

  button {
    color: #babfc4;
  }

  button:nth-child(1),
  button:nth-child(3),
  span {
    margin: 2px;
  }
  button:nth-child(1),
  button:nth-child(3) {
    font-size: 36px;
  }
  span {
    font-size: 21px;
    color: #6a737c;
  }

  button:nth-child(4),
  button:nth-child(5) {
    font-size: 18px;
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
        플
        <FontAwesomeIcon icon="fa-solid fa-caret-up" />
      </button>
      <span>0</span>
      <button>
        마
        <FontAwesomeIcon icon="fa-solid fa-caret-down" />
      </button>
      <button>
        북
        <FontAwesomeIcon icon="fa-regular fa-bookmark" />
      </button>
      <button>
        새
        <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" />
      </button>
    </Block>
  );
};
