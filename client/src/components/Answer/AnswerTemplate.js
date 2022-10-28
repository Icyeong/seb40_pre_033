import { LiBlock } from '../Question/QuestionTemplate';
import { AnswerContent } from './AnswerContent';
import { AnswerLeftBar } from './AnswerLeftBar';

export const AnswersTemplate = (type) => {
  return (
    <LiBlock type={type.type}>
      <div>
        <AnswerLeftBar />
        <AnswerContent />
      </div>
      {/* <AnswerComments /> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Add a comment</a>
    </LiBlock>
  );
};
