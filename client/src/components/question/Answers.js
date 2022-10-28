import styled from 'styled-components';
import { AnswersHeader } from './AnswersHeader';
import { QuestionTemplate } from './QuestionTemplate';
import { AnswerWrite } from './AnswerWrite';
import { Tags } from '../Common/Tags';

const Block = styled.div`
  padding-top: 10px;

  > h2 {
    margin: 15px 0 17px;
    font-size: 17px;

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
  return (
    <Block>
      <AnswersHeader />
      <ul>
        <QuestionTemplate type="answer" />
      </ul>
      <AnswerWrite />
      <h2>
        Not the answer you&#39;re looking for? Browse other questions tagged{' '}
        <Tags>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">python</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">ios</a>
          </li>
        </Tags>
        or <a href="/questions/ask">ask your own question</a>.
      </h2>
    </Block>
  );
};
