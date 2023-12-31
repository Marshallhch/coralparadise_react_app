import { styled } from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto;

  .slick-slide {
    overflow: hidden;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .slide-item {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: -3px 3px 10px #ccc;

    .heart-icon {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 999;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.point};
      z-index: 999;
    }

    .slider-text {
      position: absolute;
      bottom: 0;
      background: #fff;
      width: 100%;
      padding: 1rem;

      h3 {
        line-height: 200%;
      }

      p {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        em {
          color: #999;
          margin-right: 0.5rem;
        }
        span {
          color: ${({ theme }) => theme.colors.point};
        }
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 999;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.point};
    border: 2px solid ${({ theme }) => theme.colors.point};
    transition: all 0.4s;
    &:hover {
      background: ${({ theme }) => theme.colors.point};
      color: #fff;
    }
  }

  .slick-prev {
    left: -60px;
  }

  .slick-next {
    right: -60px;
  }

  @media screen and (max-width: 1380px) {
    .slick-prev {
      left: 0px;
    }

    .slick-next {
      right: 0px;
    }
  }
`;

export const BestSlider = styled(SliderWrapper)`
  margin-top: 2.5rem;

  .slick-slide > div {
    height: 100%;
  }

  .slide-item {
    border-radius: 0;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex !important;

    .slider-text {
      position: absolute;
      background: transparent;
      width: 100%;
      height: 100%;

      span {
        position: absolute;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        background: ${({ theme }) => theme.colors.point};
        color: #fff;
      }

      h3 {
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        letter-spacing: -1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .slick-list {
    overflow: visible;
    .slick-slide {
      padding: 0.5rem;
      /* height: 450px; */
      position: relative;
    }
  }
`;
