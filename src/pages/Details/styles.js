import styled, { css } from "styled-components";

export const Container = styled.main`
  height: 60vh;
  background-position: center;
  background-size: cover;
  position: relative;
  ${({ backgroundCover }) =>
    backgroundCover
      ? css`
          background-image: url("${backgroundCover}");
        `
      : css`
          background-image: transparent;
        `}

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #ffffffcc, #f8f9fa);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 74rem) {
    height: 40vh;
  }

  @media (max-width: 44rem) {
    height: 30vh;
  }
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  z-index: 1;
  position: relative;
  top: 40%;
  padding-bottom: 6rem;

  > h1 {
    font-size: 5.5rem;
    color: var(--color-pink);
    text-shadow: 20px 20px 20px var(--color-main-box-shadow);
  }

  @media (max-width: 74rem) {
    max-width: 40rem;

    > h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 44rem) {
    max-width: 25rem;

    > h1 {
      font-size: 2rem;
    }
  }
`;

export const ImageBoxDetails = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.8fr;
  align-items: center;

  > div {
    > div {
      display: flex;
      align-items: center;

      > span {
        display: flex;
        align-items: center;
        margin: 2rem 1rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--color-title-gray);

        &:first-child {
          margin-left: 0;
        }

        > svg {
          margin-right: 0.5rem;
          color: var(--color-pink);
        }

        > small {
          margin-left: 0.2rem;
        }
      }
    }
    > p {
      font-weight: 100;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--color-title-gray);
    }
  }

  @media (max-width: 74rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 44rem) {
    > div > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 2rem 0;

      > span {
        margin-top: 0.5rem;
        margin-bottom: 0;

        &:nth-child(3) {
          margin-left: 0;
        }
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  > img {
    position: relative;
    top: -2rem;
    z-index: -1;
    border-radius: 0.2rem;
    box-shadow: 30px 30px 40px 10px rgb(15 42 70 / 11%);
  }

  > button {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background-color: var(--color-white);
    box-shadow: 10px 10px 40px 10px var(--color-main-box-shadow);
    position: absolute;
    right: 5rem;
    bottom: 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-pink);

    > svg {
      text-shadow: 10px 10px 10px #000;
    }
  }

  @media (max-width: 74rem) {
    > img {
      top: 0;
    }
  }

  @media (max-width: 44rem) {
    > button {
      right: 1rem;
    }
  }
`;
