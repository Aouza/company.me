import React, { useEffect, useState } from "react";
import Card from "./Card";
import api from "../../services/api";
import { Container } from "./styles";

function AnimesCard() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get("/anime").then((response) => {
      setAnimes(response.data.data);
    });
  }, []);

  return (
    <Container>
      {animes?.map((anime) => (
        <Card key={anime.id} data={anime} />
      ))}
    </Container>
  );
}

export default AnimesCard;
