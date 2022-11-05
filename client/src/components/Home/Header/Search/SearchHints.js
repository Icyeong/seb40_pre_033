import { Link } from 'react-router-dom';
import {
  Explanation,
  Box,
  Hint,
  Help,
  Bottom,
  SearchLink,
} from './Modal_style';

const allHints = [
  { hint: '[tag]', explanation: 'search within a tag' },
  { hint: 'answers:0', explanation: 'unanswered questions' },
  { hint: 'user:1234', explanation: 'search by author' },
  { hint: 'score:3', explanation: 'posts with a 3+ score' },
  { hint: '"words here"', explanation: 'exact phrase' },
  { hint: 'is:question', explanation: 'type of post' },
  { hint: 'collective:"Name"', explanation: 'collective content' },
  { hint: 'isaccepted:yes', explanation: 'search within status' },
];

export const SearchHints = () => {
  return (
    <>
      <Box>
        {allHints.map((e) => (
          <div key={e.hint}>
            <Hint>{e.hint}</Hint>
            <Explanation>{e.explanation}</Explanation>
          </div>
        ))}
      </Box>
      <Bottom className="bottom">
        <SearchLink>
          <Link to="/questions/ask"> Ask a question</Link>
        </SearchLink>
        <Help>
          <a href="https://stackoverflow.com/help/searching">Search help</a>
        </Help>
      </Bottom>
    </>
  );
};
