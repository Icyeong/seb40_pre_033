import { ProfileRight } from './ProfileRIght';
import { ProfileLeft } from './SideContent';

export const Profile = () => {
  return (
    <div className="responsive">
      <ProfileLeft />
      <ProfileRight />
    </div>
  );
};
