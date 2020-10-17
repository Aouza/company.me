import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #ffffffcf;
  top: 0;
  left: 0;
  z-index: 9999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s;
  position: fixed;
  height: 0;
  width: 100vw;
  overflow: hidden;
  opacity: 0;

  > iframe {
    display: block;
    border: 10px solid #fff;
    box-shadow: 10px 10px 30px rgb(15 42 70 / 46%);
    border-radius: 0.3rem;
  }

  > button {
    position: absolute;
    width: 4rem;
    height: 4rem;
    background: transparent;
    top: 2rem;
    right: 2rem;
    border-radius: 100%;

    > svg {
      color: var(--color-pink);
    }
  }

  ${({ modalActive }) =>
    modalActive &&
    css`
      height: 100vh;
      opacity: 1;
    `}
`;
