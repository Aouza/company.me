import styled from "styled-components";

export const Container = styled.li`
  padding: 1.5rem;
  box-shadow: 25px 25px 30px 20px var(--color-main-box-shadow);
  border-radius: 1rem;
  position: relative;

  > a:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--color-text-gray);

    > img {
      width: 100%;
      border-radius: 0.6rem;
      box-shadow: 11px 10px 0px var(--color-pink), -11px 30px 30px #ff006624;
      margin: 1rem 0 2rem 0;
    }
  }

  > span {
    padding: 0.5rem;
    background: #88969e1c;
    font-size: 0.7rem;

    color: var(--color-gray);
    border-radius: 0.2rem;
    font-weight: 100;
  }

  > a:nth-of-type(2) {
    position: absolute;
    padding: 0.4rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    right: -20px;
    color: var(--color-pink);
    font-size: 0.8rem;
    letter-spacing: 1.4px;
    font-weight: bold;
    opacity: 0.9;

    > svg {
      margin-left: 0.8rem;
    }
  }
`;

export const BoxCard = styled.a``;

export const Infos = styled.div`
  > h3 {
    font-size: 0.8rem;
  }
  > p {
    height: 2.2rem;
    overflow: hidden;
    line-height: 1.4;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  > div {
    margin: 0.5rem 0;
    svg {
      color: #f7a000;
      margin: 0 0.1rem;
    }
  }
`;
