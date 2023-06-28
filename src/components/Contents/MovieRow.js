import "./MovieRow.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../../utils";
import { useEffect, useRef, useState } from "react";
import { useViewport } from "../../hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMoviesDetail } from "../store/action";

const MovieRow = (props) => {
  const { movies, title, isNetflix, idSection } = props;
  const slitherRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const dispatch = useDispatch();

  const handleSetMovie = (movie) => {
    dispatch(setMoviesDetail(movie))
  }

  const handleScrollRight = () => {
    const maxScrollWidth =
      slitherRef.current.scrollWidth - slitherRef.current.clientWidth;
    if (slitherRef.current.scrollLeft < maxScrollWidth) {
      // slitherRef.current là thẻ HTML hiện tại
      // 250 là thời gian
      // movieRef.current.clientWidth là chiều ngang của các movie
      // slitherRef.current.scrollLeft là vị trí ban đầu bằng 0
      SmoothHorizontalScrolling(
        slitherRef.current,
        250,
        movieRef.current.clientWidth * 2,
        slitherRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (slitherRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        slitherRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        slitherRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragDown > dragMove) handleScrollRight();
      if (dragDown < dragMove) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  const [windowWidth] = useViewport();

  return (
    <div className="movieRowContainer" draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>
      <div
        className="movieSlither"
        ref={slitherRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={movies && movies.length > 0 ? {
          gridTemplateColumns: `repeat(${movies.length}, ${
            windowWidth > 1200 ? '360px' :
            windowWidth > 992 ? '300px' :
            windowWidth > 768 ? '250px' : '200px'
          })`
        } : {

        }}
      >
        {movies && movies.length > 0 && movies.map((movie, index) => {
          if (movie.backdrop_path && movie.poster_path != null) {
            let imageUrl = isNetflix
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            return (
              <div
                className="movieItem"
                key={index}
                ref={movieRef}
                draggable="false"
                onClick={() => handleSetMovie(movie)}
              >
                <img src={imageUrl} alt="" draggable="false" />
                <p className="movieName">{movie.name || movie.title}</p>
              </div>
            )
          }
        })}
      </div>
      <div className={`btn-left ${isNetflix && `isNetflix`}`} onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className={`btn-right ${isNetflix && `isNetflix`}`} onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default MovieRow;
