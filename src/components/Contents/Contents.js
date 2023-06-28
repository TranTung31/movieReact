import { useDispatch, useSelector } from "react-redux";
import MovieRow from "./MovieRow";
import { useEffect } from "react";
import * as ACTION from "../../components/store/action";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./Content.scss";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../../hooks/useScrollY";

const ScrollToTop = () => {
  scroll.scrollToTop();
};

const Contents = () => {
  const [scrollY] = useScrollY();
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTION.getNetflixOriginal());
    dispatch(ACTION.getTrendingMovies());
    dispatch(ACTION.getTopRatedMovies());
    dispatch(ACTION.getActionMovies());
    dispatch(ACTION.getComedyMovies());
    dispatch(ACTION.getHorrorMovies());
    dispatch(ACTION.getRomanceMovies());
    dispatch(ACTION.getDocumentaries());
  }, [dispatch]);
  return (
    <div>
      <MovieRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
        idSection="netflix"
      />
      <MovieRow
        movies={TrendingMovies}
        title="Trending Movies"
        idSection="trending"
      />
      <MovieRow
        movies={TopRatedMovies}
        title="Top Rated Movies"
        idSection="topRated"
      />
      <MovieRow
        movies={ActionMovies}
        title="Action Movies"
        idSection="actionsMovies"
      />
      <MovieRow
        movies={ComedyMovies}
        title="Comedy Movies"
        idSection="comedyMovies"
      />
      <MovieRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horrorMovies"
      />
      <MovieRow
        movies={RomanceMovies}
        title="Romance Movies"
        idSection="romanceMovies"
      />
      <MovieRow
        movies={Documentaries}
        title="Documentaries"
        idSection="documentaries"
      />
      <div
        className="btn-arrowUp"
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowAltCircleUp />
      </div>
    </div>
  );
};

export default Contents;
