import { QuestionmarkSvg } from '../../assets/images/SignupSvg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

const OptionalInput = ({ opt, setOpt }) => {
  const popoverLeft = (
    <Popover id="popover-positioned-left" title="Popover left">
      <Popover.Body>
        <p>
          We know you hate spam, and we do too. That’s why we make it easy for
          you to update your email preferences or unsubscribe at anytime.
        </p>
        <p>
          We never share your email address with third parties for marketing
          purposes.
        </p>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="optionalCheck">
      <input
        id="opt-check"
        type="checkbox"
        name="opt"
        onChange={() => setOpt(!opt)}
      />
      <label htmlFor="opt-check">
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
      </label>

      <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
        <Button className="bootsBtn">
          <QuestionmarkSvg />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default OptionalInput;
