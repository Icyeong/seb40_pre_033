import styled from 'styled-components';

export const Tags = styled.ul`
  display: inline-flex;

  li {
    margin-right: 5px;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 12px;

    a {
      padding: 4px 6px;
      color: var(--theme-tag-color);
      background-color: var(--theme-tag-background-color);

      &:hover {
        color: var(--theme-tag-hover-color);
        background-color: var(--theme-tag-hover-background-color);
      }
      &:active {
        color: var(--theme-link-color-hover);
      }
    }
  }
`;
