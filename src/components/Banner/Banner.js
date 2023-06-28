import "./Banner.scss";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useState } from "react";

const Banner = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="Banner">
      <ReactPlayer
        url="https://vimeo.com/34122764"
        playing={true}
        volume={1}
        width="100%"
        height="100%"
        muted={isMuted}
        loop={true}
        controls={true}
        className="videoBanner"
      />

      <div className="infoBanner">
        <h1 className="headingBanner">Netflix - Beaver</h1>
        <p className="descBanner">
          Commercial for Netflix Clients - Netflix Agency - Directors - Smith &
          Foulkes Production Company - Nexus Productions
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="iconBanner"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VscUnmute
          className="iconBanner"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
      <div className="faceBottom"></div>
    </div>
  );
};

export default Banner;
