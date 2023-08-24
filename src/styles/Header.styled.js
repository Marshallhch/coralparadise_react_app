import { styled } from 'styled-components';

export const HeaderSection = styled.header`
  box-shadow: 0 0 7px 0px #ddd;

  .menu-icon {
    display: none;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 20px;

    .navi {
      display: flex;
      gap: 1.25rem;

      a {
        font-size: 1.125rem;
        font-weight: 500;
      }
    }
  }
`;
