import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../axios";
import Card from "./Card";

function Cards({ genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(genre);
      console.log(result.data.results);

      setMovies(result.data.results);
    };

    fetchData();
  }, [genre]);
  return (
    <CardsStyled className="container">
      {movies.map((movie, id) => (
        <Card key={id} movie={movie} />
      ))}
    </CardsStyled>
  );
}

const CardsStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Cards;
