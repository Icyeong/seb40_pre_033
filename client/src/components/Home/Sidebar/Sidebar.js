import { NavLink } from 'react-router-dom';
import { InfoSvg, StarSvg, EarthSvg } from '../../../assets/images/HomeSvg';
import { SidebarContainer, Wrapper, Teams } from './Sidebar_style';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Wrapper>
        <div>PUBLIC</div>
        <NavLinkMenu to="/" className="question-menu">
          <EarthSvg />
          Questions
        </NavLinkMenu>
        <div className="tab-menu">
          <Link to="/tags">Tags</Link>
        </div>
        <div className="tab-menu">
          <Link to="/users">Users</Link>
        </div>
        <div>
          COLLECTIVES
          <InfoSvg />
        <div className="side-bar-tabs">
          <NavLink className="home-link" to="/">
            <p>Home</p>
          </NavLink>

          <p className="title fc-light">PUBLIC</p>
          <NavLink className="icon-link" to="/">
            <p>
              <EarthSvg className="icon" />
              Questions
            </p>
          </NavLink>
          <NavLink activeclassname="active" className="link" to="/tags">
            <p>Tags</p>
          </NavLink>
          <NavLink activeclassname="active" className="link" to="/users">
            <p>Users</p>
          </NavLink>

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
