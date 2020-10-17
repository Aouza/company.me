/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { HiStar } from "react-icons/hi";
import { IoIosTime, IoIosHeart, IoIosClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Container, Wrapper, ImageBoxDetails, ImageContainer } from "./styles";
import Iframe from "react-iframe";
import Modal from "../../components/Modal";

const Details = (props) => {
  const [animeDetails, setAnimeDetails] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;

    api.get(`/anime/${id}`).then((response) => {
      setAnimeDetails(response.data.data);
    });
  }, [props.match.params, setAnimeDetails]);

  return (
    <Container backgroundCover={animeDetails.attributes?.coverImage?.large}>
      <Wrapper>
        <h1>{animeDetails.attributes?.canonicalTitle}</h1>
        <ImageBoxDetails>
          <ImageContainer>
            <img
              src={animeDetails.attributes?.posterImage.small}
              alt={animeDetails.attributes?.canonicalTitle}
            />
            {!!animeDetails.attributes?.youtubeVideoId.length && (
              <button onClick={() => setModalActive(!modalActive)}>
                <FaPlay size={24} />
              </button>
            )}
          </ImageContainer>

          <div>
            <div>
              <span>
                <HiStar />
                {animeDetails.attributes?.averageRating}
              </span>
              <span>{animeDetails.attributes?.ageRatingGuide}</span>
              <span>
                <IoIosTime />
                {animeDetails.attributes?.episodeLength}
                <small>Min</small>
              </span>
              <span>
                <IoIosHeart />
                {animeDetails.attributes?.favoritesCount}
              </span>
            </div>

            <p>{animeDetails.attributes?.synopsis}</p>
          </div>
        </ImageBoxDetails>
      </Wrapper>

      <Modal modalActive={modalActive}>
        <button onClick={() => setModalActive(!modalActive)}>
          <IoIosClose size={32} />
        </button>
        <Iframe
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${animeDetails.attributes?.youtubeVideoId}`}
          frameBorder="0"
        />
      </Modal>
    </Container>
  );
};

export default Details;
