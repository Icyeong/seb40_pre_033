import { LogoSvg } from '../../assets/images/LoginSvg';
import { SideContent } from '../../assets/styles/UserStyle';

export const ProfileLeft = () => {
  return (
    <SideContent>
      <h2>Stats</h2>
      <div className="left">
        <ul>
          <li>
            1<span>reputation</span>
          </li>
          <li>
            0<span>reached</span>
          </li>
          <li>
            0<span>answers</span>
          </li>
          <li>
            0<span>questions</span>
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2>Communities</h2>
        <p>Edit</p>
      </div>
      <div className="left">
        <div className="flex">
          <div>
            <LogoSvg />
            <p>
              Stack Overflow<span>1</span>
            </p>
          </div>
        </div>
      </div>
    </SideContent>
  );
};
