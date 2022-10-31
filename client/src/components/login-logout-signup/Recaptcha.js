import styled from 'styled-components';
// import ReCAPTCHA from 'react-google-recaptcha';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--black-050);
  margin: 6px 0;
  padding: 5px 0px;
  align-items: center;
`;

const Box = styled.div`
  width: 156px;
  height: 136px;
  padding: 15px 0 5px 0;
  background-color: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 4px 1px rgb(0 0 0 / 8%);
  -webkit-box-shadow: 0 0 4px 1px rgb(0 0 0 / 8%);
  display: flex;
  flex-direction: column;
  .flex {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    #robotCheck {
      border-radius: 2px;
      border: 2px solid #c1c1c1;
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    label {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
    .imgBox {
      width: 24px;
      height: 24px;
      background-image: url(https://www.gstatic.com/recaptcha/api2/logo_48.png);
      background-size: contain;
    }
    p {
      font-size: 10px;
      color: #555;
      margin: 0 0 0 2px;
    }
    a {
      font-size: 8px;
      color: #555;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      margin: 0 2px;
    }
  }

  .flex:first-child {
    margin: 13px 0 32px;
  }
  .flex:nth-child(2) {
    height: 26px;
  }
  .flex:last-child {
    height: 20px;
  }
`;

const Recaptcha = () => {
  // const captchaRef = useRef(null);
  return (
    <Wrapper>
      <Box>
        <div className="flex">
          <input id="robotCheck" type="checkbox" name="recaptcha" />
          <label htmlFor="robotCheck">{"I'm not a robot"}</label>
        </div>
        <div className="flex">
          <div className="imgBox"></div>
          <p>reCQPTCHA</p>
        </div>
        <div className="flex">
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          <span aria-hidden="true" role="presentation">
            -
          </span>
          <a
            href="https://www.google.com/intl/en/policies/terms/"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
        </div>
      </Box>
      {/* <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LcJErgiAAAAACInPwXKtBY-4jgDd_xqMAY8UWfJ"
      /> */}
    </Wrapper>
  );
};

export default Recaptcha;
