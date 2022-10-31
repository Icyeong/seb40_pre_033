import { QuestionTags } from './style';
import { useSelector } from 'react-redux';

export const Question = (type) => {
  let questions = useSelector((state) => state.questionsReducer);

  return (
    <div className="questions">
      <div className="post-summury">
        <div>0 votes</div>
        <div>0 answers</div>
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
              src="https://via.placeholder.com/32"
              alt="user-thumbnail"
              className="discussion__avatar--image"
            />

            {`${questions[type.idx].email} asked ${
              questions[type.idx].create_at
            }`}
          </div>
        </div>
      </div>
    </div>
  );
};
