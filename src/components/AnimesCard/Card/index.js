import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import { Container, Infos } from "./styles";

const Card = ({ data }) => {
  return (
    <Container>
      <span>{data.attributes.ageRatingGuide}</span>
      <Link to={`/details/${data.id}`}>
        <img
          src={data.attributes.posterImage.small}
          alt={data.attributes.canonicalTitle}
        />

        <Infos>
          <h3>{data.attributes.canonicalTitle}</h3>
          <div>
            <span>
              <BsStarFill />
            </span>
            <span>
              <BsStarFill />
            </span>
            <span>
              <BsStarHalf />
            </span>
            <span>
              <BsStar />
            </span>
          </div>
          <p>{data.attributes.description}</p>
        </Infos>
      </Link>
      <Link to={`/details/${data.id}`}>
        <span>veja mais</span>
        <HiOutlineArrowNarrowRight />
      </Link>
    </Container>
  );
};

export default Card;
