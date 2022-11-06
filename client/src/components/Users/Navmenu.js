import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  margin: 13px 0;
  button {
    height: 29px;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    margin: 2px;
    font-size: 13px;
    color: var(--black-600);
    border-radius: 20px;

    &:hover {
      background: #e3e6e8;
    }
  }
  button.is-selected {
    background: var(--theme-primary-color);
    color: var(--white);
  }
`;

export const Navmenu = () => {
  return (
    <NavWrapper>
      <button>Profile</button>
      <button>Activity</button>
      <button>Saves</button>
      <button>Settings</button>
    </NavWrapper>
  );
};
