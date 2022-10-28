import styled from 'styled-components';
import {
  BadgeSvg,
  QuestionSvg,
  TagSvg,
  VottingSvg,
} from '../../assets/images/SignupSvg';

const TxtWrapper = styled.section`
  width: 420px;
  height: auto;
  margin: 0 48px 128px 0;

  h1 {
    font-size: 27px;
    margin-bottom: 32px;
  }

  .mainTxt {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    p {
      font-size: 15px;
      margin: 0 0 0 8px;
    }
  }

  .smallTxt {
    font-size: 13px;
    display: flex;
    flex-direction: column;
    a {
      color: var(--theme-link-color);
      &:hover {
        color: var(--theme-link-color-hover);
      }
    }
  }
`;

const SignupTxt = () => {
  return (
    <TxtWrapper>
      <h1>Join the Stack Overflow community</h1>
      <div className="mainTxt">
        <QuestionSvg />
        <p>Get unstuck — ask a question</p>
      </div>
      <div className="mainTxt">
        <VottingSvg />
        <p>Unlock new privileges like voting and commenting</p>
      </div>
      <div className="mainTxt">
        <TagSvg />
        <p>Save your favorite tags, filters, and jobs</p>
      </div>
      <div className="mainTxt">
        <BadgeSvg />
        <p>Earn reputation and badges</p>
      </div>
      <div className="smallTxt">
        Collaborate and share knowledge with a private group for FREE.
        <a href="https://stackoverflow.com/teams?utm_source=so-owned&amp;utm_medium=product&amp;utm_campaign=free-50&amp;utm_content=public-sign-up">
          Get Stack Overflow for Teams free for up to 50 users.
        </a>
      </div>
    </TxtWrapper>
  );
};

export default SignupTxt;
