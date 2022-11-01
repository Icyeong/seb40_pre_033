import styled from 'styled-components';

export const BlueButton = styled.button`
  margin: 0 4px;
  padding: 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 13px;
  color: var(--theme-button-primary-color);
  background-color: var(--theme-button-primary-background-color);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

  &:active,
  &:hover,
  &:focus {
    color: var(--theme-button-primary-hover-color);
    background-color: var(--theme-button-primary-hover-background-color);
  }

  &:active {
    background-color: var(
      --theme-button-primary-active-background-color
    ) !important;
  }
`;
