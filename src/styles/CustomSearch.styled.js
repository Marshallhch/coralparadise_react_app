import { styled } from 'styled-components';

export const CustomSeach = styled.div`
  text-align: center;

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: 0.25rem;

    span {
      font-weight: 600;
      text-decoration: underline;
    }
  }

  .buttons {
    width: 50%;
    display: flex;
    margin: auto;
    column-gap: 1rem;
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }

    .buttons {
      width: 70%;
      display: flex;
      margin: auto;
      column-gap: 1rem;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 1.125rem;
      letter-spacing: 2px;

      br {
        display: none;
      }
    }

    .buttons {
      width: 90%;
      display: flex;
      margin: auto;
      column-gap: 0.5rem;
      margin-top: 2rem;
    }
  }
`;
