import { useState } from "react";
import "./App.css";
import MovieComponent from "./MovieComponent";
import MovieInfoComponent from "./MovieInfoComponent";
const API_KEY = "c54a7477";
const logo = require("./movie-icon.jpg");
const search = require("./search-icon.png");
const axios = require("axios");

function App() {
  const [searchQuery, updateSearchQ] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectMovie, onMovieSelect] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQ(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="Container">
      <header className="Header">
        <div className="AppName">
          <img src={logo} className="MovieImage" alt="" />
          Videoteka
        </div>
        <div className="SearchBox">
          <img src={search} className="SearchImage" alt="" />
          <input
            className="SearchInput"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </header>
      {selectMovie && (
        <MovieInfoComponent
          selectMovie={selectMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className="MovieListContainer">
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          : "No Movie search"}
      </div>
    </div>
  );
}

export default App;
