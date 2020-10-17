import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/companyme-logo.svg";

import { Container, Wrapper } from "./styles";

const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const scroll = useCallback(() => {
    const valueScroll = window.pageYOffset;

    if (valueScroll > 10) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  }, []);

  document.addEventListener("scroll", scroll);

  return (
    <Container headerScroll={headerScroll}>
      <Wrapper>
        <Link to="/">
          <img src={LogoImage} alt="Comp.Anime" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Header;
