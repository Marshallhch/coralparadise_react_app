import { styled } from 'styled-components';

export const BestWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;

  h3 {
    letter-spacing: 0.25rem;
    line-height: 250%;
    font-size: 1.8rem;

    span {
      text-decoration: underline;
    }
  }

  p {
    color: #777;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    h3 {
      font-size: 1.2rem;
      line-height: 200%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    h3 {
      font-size: 1rem;
      line-height: 160%;
    }

    p {
      font-size: 0.875rem;
      margin-top: 0.75rem;
    }
  }
`;
