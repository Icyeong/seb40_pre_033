import { LiBlock } from '../Question/QuestionTemplate';
import { AnswerContent } from './AnswerContent';
import { AnswerLeftBar } from './AnswerLeftBar';

export const AnswersTemplate = (type) => {
  const idx = type.idx;

  return (
    <LiBlock>
      <div>
        <AnswerLeftBar idx={idx} />
        <AnswerContent idx={idx} />
      </div>
      {/* <AnswerComments /> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Add a comment</a>
    </LiBlock>
  );
};
