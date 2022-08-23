import { useEffect, useState } from "react";
import "./MovieInfoComponent.css";
const axios = require("axios");
const API_KEY = "c54a7477";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="MovieInfoComponent">
      {movieInfo ? (
        <>
          <img src={movieInfo?.Poster} className="MovieImg" alt="aaa" />
          <div className="Info">
            <span className="MovieName ">
              {movieInfo?.Type}: {movieInfo?.Title}
            </span>

            <span className="MovieInfo">
              IMDB Rating:{" "}
              <span className="MovieCar">{movieInfo?.imdbRating}</span>
            </span>
            <span className="MovieInfo">
              Year: <span className="MovieCar">{movieInfo?.Year}</span>
            </span>
            <span className="MovieInfo">
              Rated: <span className="MovieCar">{movieInfo?.Rated}</span>
            </span>
            <span className="MovieInfo">
              Runtime: <span className="MovieCar">{movieInfo?.Runtime}</span>
            </span>
            <span className="MovieInfo">
              Genre: <span className="MovieCar">{movieInfo?.Genre}</span>
            </span>
            <span className="MovieInfo">
              Director: <span className="MovieCar">{movieInfo?.DIrector}</span>
            </span>
            <span className="MovieInfo">
              Actors: <span className="MovieCar">{movieInfo?.Actors}</span>
            </span>
            <span className="MovieInfo">
              Plot: <span className="MovieCar">{movieInfo?.Plot}</span>
            </span>
          </div>
          <span className="CloseBtn" onClick={() => props.onMovieSelect()}>
            x
          </span>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default MovieInfoComponent;
