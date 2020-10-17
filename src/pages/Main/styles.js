import styled from "styled-components";

export const Container = styled.main``;

export const Wrapper = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  padding-bottom: 6rem;

  @media (max-width: 74rem) {
    max-width: 40rem;
  }

  @media (max-width: 44rem) {
    max-width: 25rem;
  }
`;

export const Calling = styled.div`
  padding-top: 10rem;

  > h1 {
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0;
  }

  > h2 {
    text-align: center;
    font-size: 1.2rem;
    max-width: 50%;
    width: 100%;
    margin: 0 auto;
    line-height: 1.4;
    color: var(--color-text-gray);
    font-weight: 100;
  }

  @media (max-width: 74rem) {
    > h1 {
      font-size: 2rem;
    }

    > h2 {
      max-width: 100%;
    }
  }

  @media (max-width: 44rem) {
    padding-top: 6rem;
    > h1 {
      font-size: 1.4rem;
    }

    > h2 {
      max-width: 100%;
      font-size: 0.8rem;
    }
  }
`;

export const CatalogCards = styled.section``;
