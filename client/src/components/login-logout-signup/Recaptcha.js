import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--black-050);
  margin: 6px 0;
  padding: 8px 0px 2px;

  #no-captcha-here {
    width: 164px;
    height: 144px;
  }

  #no-captcha-here > div > div > div {
    width: 100% !important;

    iframe {
      width: 100% !important;
    }
  }
`;

const Recaptcha = () => {
  const captchaRef = useRef(null);
  return (
    <Wrapper>
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LcJErgiAAAAACInPwXKtBY-4jgDd_xqMAY8UWfJ"
      />
    </Wrapper>
  );
};

export default Recaptcha;
