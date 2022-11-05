import { useSelector } from 'react-redux';
import {
  CakeSvg,
  CalendarSvg,
  ClockSvg,
  NetworkSvg,
  PencilSvg,
} from '../../assets/images/UserSvg';

export const UserBoard = () => {
  const user = useSelector((state) => state.userReducer.data);

  return (
    <section className="user-wrapper">
      <div className="user-imgBox"></div>
      <div className="user-info">
        <h1>{user && user.nickname}</h1>
        <ul>
          <li>
            <CakeSvg />
            <div>
              Member for <span>3 days</span>
            </div>
          </li>
          <li>
            <ClockSvg />
            <div>Last seen this week</div>
          </li>
          <li>
            <CalendarSvg />
            <div>Visited 3 days, 3 consecutive</div>
          </li>
        </ul>
      </div>

      <div className="profile-btns">
        <button>
          <PencilSvg /> Edit profile
        </button>
        <button>
          <NetworkSvg /> Network profile
        </button>
      </div>
    </section>
  );
};
