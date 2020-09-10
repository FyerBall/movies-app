import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextTruncate from "react-text-truncate";

const BASE_URL = "https://image.tmdb.org/t/p/original/";
function Card({ movie }) {
  return (
    <CardStyled>
      <img
        src={`${BASE_URL}${movie.backdrop_path}`}
        alt=""
        className="card__poster"
      />
      <div className="card__info">
        <h2 className="card__title">{movie.title || movie.name}</h2>
        <span className="card__rating">
          <ThumbUpIcon />
          {movie.vote_average}{" "}
        </span>
      </div>
      <TextTruncate
        line={3}
        element="p"
        truncateText="…"
        text={movie.overview}
        className="card__overview"
      />
      {/* <p className="card__overview">{movie.overview}</p> */}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  transition: all 0.5s ease-in-out;
  width: 400px;
  height: 400px;
  cursor: pointer;

  &:hover {
    transform: scale(1.09);
    .card__poster {
      border: 1px solid #f3f3f3;
    }
    .card__overview {
      display: inline;
    }
    .MuiSvgIcon-root {
      color: #7e8a97 !important;
    }
  }

  .card__overview {
    display: none;
  }
  .card__poster {
    width: 380px;
    /* height: 300px; */
    object-fit: contain;
  }
  .card__title {
    padding: 10px 0;
  }
  .card__rating,
  .card__info {
    display: flex;
    align-items: center;
  }
  .card__info {
    justify-content: space-evenly;
  }
  .MuiSvgIcon-root {
    margin-right: 3px;
  }
`;

export default Card;
