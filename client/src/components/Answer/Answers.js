import styled from 'styled-components';
import { AnswersHeader } from './AnswersHeader';
import { AnswerWrite } from './AnswerWrite';
import { Tags } from '../Common/Tags';
import { useSelector } from 'react-redux';
import { AnswersTemplate } from './AnswerTemplate';

const Block = styled.div`
  padding-top: 10px;

  > h2 {
    margin: 15px 0 17px;
    font-size: 17px;
    line-height: 1.5rem;

    > a {
      color: var(--theme-link-color);

      &:hover,
      &:active {
        color: var(--theme-link-color-hover);
      }
    }
  }

  // Mobile
  @media screen and (max-width: 640px) {
    > h2 {
      font-size: 14.3846px;
    }
  }
`;

export const Answers = () => {
  let question = useSelector((state) => state.questionReducer);

  return (
    <Block>
      <AnswersHeader />
      <ul>
        {question.comments.map((answer, idx) => (
          <AnswersTemplate key={idx} idx={idx} />
        ))}
      </ul>
      <AnswerWrite />
      <h2>
        Not the answer you&#39;re looking for? Browse other questions tagged{' '}
        <Tags>
          {question.tags.map((tag, idx) => (
            <li key={idx}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">{tag}</a>
            </li>
          ))}
        </Tags>
        or <a href="/questions/ask">ask your own question</a>.
      </h2>
    </Block>
  );
};
