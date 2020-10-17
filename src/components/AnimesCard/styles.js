import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;
  margin-top: 6rem;

  @media (max-width: 74rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 44rem) {
    grid-template-columns: 1fr;
  }
`;
