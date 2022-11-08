import { useRef } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tags } from '../Common/Tags';

export const Question = (type) => {
  const bodyRef = useRef();

  let questions = useSelector((state) => state.questionsReducer.data);

  if (bodyRef.current) {
    bodyRef.current.innerHTML = questions[type.idx].content;
  }

  if (questions[type.idx].createAt) {
    var date = `${questions[type.idx].createAt.slice(0, 10)} ${questions[
      type.idx
    ].createAt.slice(11, 19)}`;
  }

  return (
    <div className="questions">
      <div className="post-summury">
        <div>{questions[type.idx].vote} votes</div>
        <div>
          {questions[type.idx].comments
            ? questions[type.idx].comments.length
            : 0}
          answers
        </div>
        <div>0 views</div>
      </div>
      <div className="question-list">
        <h2 className="question-title">
          <Link to={`/questions/${questions[type.idx].articleId}`}>
            {questions[type.idx].title}
          </Link>
        </h2>
        <div className="question-content" ref={bodyRef}></div>
        <div className="question-information">
          <Tags>
            {questions[type.idx].tags.map((tag, idx) => (
              <li key={idx}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">{tag}</a>
              </li>
            ))}
          </Tags>
          <div className="question__avatar--wrapper">
            <img
              src="https://via.placeholder.com/32"
              alt="user-thumbnail"
              className="discussion__avatar--image"
            />

            {`${questions[type.idx].email} asked ${date}`}
          </div>
        </div>
      </div>
    </div>
  );
};
