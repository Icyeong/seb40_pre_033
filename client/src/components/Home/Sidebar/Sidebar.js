import { useState } from 'react';
import { InfoSvg, StarSvg, EarthSvg } from '../../../assets/images/HomeSvg';
import { SidebarContainer, Wrapper, Teams } from './Sidebar_style';

export const Sidebar = () => {
  const [selected, setSelected] = useState('Home');

  const sortClick = (e) => {
    switch (e.target.value) {
      case 'Home':
        setSelected('Home');
        break;
      case 'Questions':
        setSelected('Questions');
        break;
      case 'Tags':
        setSelected('Tags');
        break;
      case 'Users':
        setSelected('Users');
        break;

      default:
        break;
    }
  };

  return (
    <SidebarContainer>
      <Wrapper>
        <div className="side-bar-tabs">
          <div className="tab-menu">
            <div className="companies">Home</div>
          </div>
          <p className="title fc-light">PUBLIC</p>
          <a
            onClick={sortClick}
            className={selected === 'Questions' ? 'is-selected' : ''}
            value={'Questions'}
            href="/"
          >
            <p>
              <EarthSvg />
              Questions
            </p>
          </a>
          <a
            onClick={sortClick}
            className={selected === 'Tags' ? 'is-selected' : ''}
            value={'Tags'}
            href="/tags"
          >
            <p>Tags</p>
          </a>
          <a
            onClick={sortClick}
            className={selected === 'Users' ? 'is-selected' : ''}
            value={'Users'}
            href="/users"
          >
            <p>Users</p>
          </a>
          <div className="tab-menu">
            <div className="companies">Companies</div>
          </div>
          <div className="collectives">
            COLLECTIVES
            <InfoSvg />
          </div>
        </div>

        <div className="tab-menu2">
          <StarSvg />
          Explore Collectives
        </div>
        <div className="teams">TEAMS</div>
        <Teams>
          <div className="textbox">
            <strong>Stack Overflow for Teams -</strong>
            Start collaborating and sharing organizational knowledge.
          </div>
          <img
            src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
            width="139"
            height="114"
            alt="promo"
          />
          <button className="orange-button">Create a free Team</button>
          <button className="white-button">Why Teams?</button>
        </Teams>
      </Wrapper>
    </SidebarContainer>
  );
};
