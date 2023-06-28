import "./SearchMovies.scss";
import { useViewport } from "../../hooks/useViewport";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSearchMovies, setMoviesDetail } from "../store/action";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchMovies = () => {
  const [windowWidth] = useViewport();
  const dispath = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) dispath(getSearchMovies(keywords));
  }, [keywords, dispath]);

  return (
    <div className="SearchModel">
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            }, auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div className="searchItem" key={index} onClick={() => dispath(setMoviesDetail(movie))}>
                  <img src={imageUrl} alt={movie.title || movie.name} />
                  <span className="movieName">{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="SearchError">
          <h1>Your search "{keywords}" did not have any matches</h1>
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
