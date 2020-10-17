import React from "react";
import AnimesCard from "../../components/AnimesCard";

import { Container, Wrapper, Calling, CatalogCards } from "./styles";

function Main() {
  return (
    <Container>
      <Wrapper>
        <Calling>
          <h1>
            O maior catálogo de animes do mundo para te acompanhar nesta
            quarentena.
          </h1>
          <h2>
            Selecione o seu anime de interesse para saber mais detalhes e elevar
            seu nível Otaku.
          </h2>
        </Calling>

        <CatalogCards>
          <AnimesCard />
        </CatalogCards>
      </Wrapper>
    </Container>
  );
}

export default Main;
