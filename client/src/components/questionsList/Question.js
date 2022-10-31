import { QuestionTags } from './style';
import { useSelector } from 'react-redux';

export const Question = (type) => {
  let question = useSelector((state) => state.questionReducer);
  let questions = useSelector((state) => state.questionsReducer);

  return (
    <div className="questions">
      <div className="post-summury">
        <div>{question.vote} votes</div>
        <div>{question.comments.length} answers</div>
        <div>0 views</div>
      </div>
      <div className="question-list">
        <h2 className="question-title">
          {/* /questions/id */}
          <a href="/questions/1">
            {/* How to prevent 2 objects from splitting on top of another */}
            {questions[type.idx].title}
          </a>
        </h2>
        <div className="question-content">
          {/* Hello so Im creating a game (since i recently started studying
          javascript). The game is Asteroids the code is basically the same
          as freeCodeCamp video only some differences are the scoring system
          ... */}
          {questions[type.idx].content}
        </div>
        <div className="question-information">
          <QuestionTags>
            {questions[type.idx].tags.map((tag, idx) => (
              <li key={idx}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">{tag}</a>
              </li>
            ))}
          </QuestionTags>
          <div className="question__avatar--wrapper">
            <img
              className="discussion__avatar--image"
              src={questions[type.idx].image}
              alt=""
            />
            {`${
              questions[type.idx].user
            } asked ${new Date().toLocaleDateString()}`}
          </div>
        </div>
      </div>
    </div>
  );
};
