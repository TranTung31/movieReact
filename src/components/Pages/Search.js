import MoviesDetail from "../MoviesDetail/MoviesDetail";
import SearchMovies from "../SearchMovies/SearchMovies";
import { useSelector } from "react-redux";

const Search = () => {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchMovies />
      <MoviesDetail
        movie={MovieDetail}
        showModel={MovieDetail ? true : false}
      />
    </div>
  );
};

export default Search;
