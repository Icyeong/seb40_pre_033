import { EarthSvg, InfoSvg, StarSvg } from '../../../assets/images/HomeSvg';
import {
  DropdownContainer,
  Wrapper,
  NavLinkMenu,
  Teams,
} from './Dropdown_style';

export const Dropdown = () => {
  return (
    <DropdownContainer>
      <Wrapper>
        <div>PUBLIC</div>
        <NavLinkMenu to="/">
          <EarthSvg />
          Questions
        </NavLinkMenu>
        <div className="tab-menu">Tags</div>
        <div className="tab-menu">Users</div>
        <div>
          COLLECTIVES
          <InfoSvg />
        </div>
        <NavLinkMenu>
          <StarSvg />
          Explore Collectives
        </NavLinkMenu>
        <div>TEAMS</div>
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
    </DropdownContainer>
  );
};
