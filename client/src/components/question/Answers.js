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
      color: #0074cc;
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
          <li>python</li>
          <li>ios</li>
        </Tags>
        or <a href="/questions/ask">ask your own question</a>.
      </h2>
    </Block>
  );
};
