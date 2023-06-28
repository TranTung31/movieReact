import styled, { keyframes } from "styled-components";
import "./MoviesDetail.scss";
import { useDispatch } from "react-redux";
import { setMoviesDetail } from "../store/action";
import moment from "moment/moment";

const MoviesDetail = (props) => {
  const { movie, showModel } = props;

  const dispatch = useDispatch();

  const handleCloseModel = () => {
    dispatch(setMoviesDetail(null));
  };
  return (
    <MoviesDetailModel>
      <div
        className={`backdrop ${showModel ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModel}
      ></div>

      <div
        className={`model ${showModel ? "showModel" : "hideModel"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="container">
          <div className="infoMovie">
            <h1 className="movieName">
              {movie && (movie.title || movie.name)}
            </h1>
            <div className="statistical">
              <p className="rating">
                Rating: {movie && movie.vote_average * 10}%
              </p>
              <p className="popular">Popularing: {movie && movie.popularity}</p>
            </div>
            <p className="releaseDate">
              Release date:{" "}
              {movie &&
                (moment(movie.release_date).format("DD/MM/YYYY") ||
                  moment(movie.first_air_date).format("DD/MM/YYYY"))}
            </p>
            <p className="runtime">
              Run time: {movie && (movie.runtime || movie.episode_run_time)}
            </p>
            <p className="overview">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MoviesDetailModel>
  );
};

const fadeIn = keyframes`
    0%: { background: rgba(0, 0, 0, 0) }
    100%: { background: rgba(0, 0, 0, 0.6)}
`;
const MoviesDetailModel = styled.div`
  .backdrop {
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forward;
  }
`;

export default MoviesDetail;
