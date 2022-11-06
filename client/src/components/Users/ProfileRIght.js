import { SpotSvg } from '../../assets/images/UserSvg';
import { UserProfile } from '../../assets/styles/UserStyle';

export const ProfileRight = () => {
  return (
    <UserProfile>
      <h2>About</h2>
      <div className="right">
        <p>
          Your about me section is currently blank. Would you like to add one?
          Edit profile
        </p>
      </div>
      <h2>Badges</h2>
      <div className="right">
        <p>You have not earned any badges.</p>
      </div>
      <h2>Posts</h2>
      <div className="right post">
        <SpotSvg />
        <p>Just getting started? Try answering a question!</p>
        <p>
          Your most helpful questions, answers and tags will appear here. Start
          by <span>answering a question</span> or <span>selecting tags</span>
          that match topics you’re interested in.
        </p>
      </div>
    </UserProfile>
  );
};
