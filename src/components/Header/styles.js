import styled, { css } from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;

  ${({ headerScroll }) =>
    headerScroll &&
    css`
      background-color: var(--color-light-gray);
      box-shadow: 5px 5px 5px var(--color-main-box-shadow);
    `}
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;

  > a > img {
    width: 9rem;
  }

  @media (max-width: 74rem) {
    max-width: 40rem;
  }

  @media (max-width: 44rem) {
    max-width: 25rem;
  }
`;
