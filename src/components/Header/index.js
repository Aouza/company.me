import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/companyme-logo.svg";

import { Container, Wrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img src={LogoImage} alt="Comp.Anime" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Header;
