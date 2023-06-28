import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import Contents from "../Contents/Contents";
import Menu from "../Menu/Menu";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false)
  }, [MovieDetail]);
  return (
    <div>
      <Banner />
      <Contents />
      <Menu />
      <MoviesDetail
        movie={MovieDetail}
        showModel={isShowMovieDetail}
      />
    </div>
  );
};

export default Home;
