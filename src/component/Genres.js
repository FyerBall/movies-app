import React from "react";
import styled from "styled-components";
import requests from "../requests";
function Genres({ setGenere }) {
  return (
    <GenresStyled className="container">
      <ul className="genres__list">
        <li onClick={() => setGenere(requests.fetchTrending)}>Trending</li>
        <li onClick={() => setGenere(requests.fetchAction)}>Action</li>
        <li onClick={() => setGenere(requests.fetchAdventure)}>Adventure</li>
        <li onClick={() => setGenere(requests.fetchAnimation)}>Animation</li>
        <li onClick={() => setGenere(requests.fetchComedy)}>Comedy</li>
        <li onClick={() => setGenere(requests.fetchCrime)}>Crime</li>
        {/* <li onClick={() => setGenere(requests.fetchDocumentary)}>
          Documentary
        </li> */}
        <li onClick={() => setGenere(requests.fetchDrama)}>Drama</li>
        <li onClick={() => setGenere(requests.fetchFamily)}>Family</li>
        <li onClick={() => setGenere(requests.fetchFantasy)}>Fantasy</li>
        <li onClick={() => setGenere(requests.fetchHistory)}>History</li>
        <li onClick={() => setGenere(requests.fetchHorror)}>Horror</li>
        <li onClick={() => setGenere(requests.fetchMusic)}>Music</li>
        <li onClick={() => setGenere(requests.fetchMystery)}>Mystery</li>
        <li onClick={() => setGenere(requests.fetchRomance)}>Romance</li>
        <li onClick={() => setGenere(requests.fetchScienceFiction)}>
          Science Fiction
        </li>
        <li onClick={() => setGenere(requests.fetchThriller)}>Thriller</li>
        <li onClick={() => setGenere(requests.fetchWestern)}>Western</li>
        <li onClick={() => setGenere(requests.fetchWar)}>War</li>
      </ul>
    </GenresStyled>
  );
}

const GenresStyled = styled.div`
  margin: 20px 0;
  /* padding: 20px auto; */
  .genres__list {
    display: flex;
    align-items: center;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .genres__list > li {
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    opacity: 0.7;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
      transform: scale(1.09);
    }
  }
`;

export default Genres;
