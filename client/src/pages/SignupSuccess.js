import styled from 'styled-components';
import { CheckSvg } from '../assets/images/SignupSvg';
import { Wrapper } from '../assets/styles/LoginStyle';
import { Header } from '../components/Home/Header/Header';

const Flexbox = styled.div`
  width: 527px;
  height: 120.5px;
  padding: 16px;
  background-color: var(--green-050);
  border: 1px solid var(--green-200);
  border-radius: 3px;
  display: flex;
  svg {
    width: 36px;
    margin-right: 8px;
  }
  .successBox {
    width: 448px;
    p:first-child {
      font-size: 17px;
      margin-bottom: 8px;
      line-height: 23px;
    }
    p:last-child {
      font-size: 13px;
      margin: 0;
      line-height: 17px;
    }
  }
`;

const SignupSuccess = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Flexbox>
          <CheckSvg />
          <div className="successBox">
            <p>
              Registration email sent to test@gamil.com. Open this email to
              finish signup.
            </p>
            <p>
              If you don’t see this email in your inbox within 15 minutes, look
              for it in your junk mail folder. If you find it there, please mark
              the email as “Not Junk”.
            </p>
          </div>
        </Flexbox>
      </Wrapper>
    </>
  );
};

export default SignupSuccess;
