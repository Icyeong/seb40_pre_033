import { QuestionmarkSvg } from '../../assets/images/SignupSvg';

const OptionalInput = () => {
  return (
    <div className="optionalCheck">
      <input id="opt-check" type="checkbox" />
      <label htmlFor="opt-check">
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
      </label>
      <QuestionmarkSvg />
    </div>
  );
};

export default OptionalInput;
