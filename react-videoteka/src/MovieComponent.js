import "./MovieComponent.css";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="MovieComponent"
      onClick={() => {
        props.onMovieSelect(imdbID);
      }}
    >
      <img src={Poster} className="CoverImg" alt="" />
      <span className="MovieName">{Title}</span>
      <div className="InfoColumn">
        <span className="MovieInfo">Year: {Year} </span>
        <span className="MovieInfo">Type: {Type} </span>
      </div>
    </div>
  );
};

export default MovieComponent;
