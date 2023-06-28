import "./Menu.scss";
import { FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="Menu">
      <MenuItem name="Netflix" Icon={RiNetflixFill} to="netflix"/>
      <MenuItem name="Trending" Icon={FaHotjar} to="trending"/>
      <MenuItem name="Top Rated" Icon={FaStar} to="topRated"/>
      <MenuItem name="Actions Movies" Icon={GiNinjaHeroicStance} to="actionsMovies"/>
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to="comedyMovies"/>
      <MenuItem name="Horror Movies" Icon={GiGhost} to="horrorMovies"/>
      <MenuItem name="Romance Movies" Icon={GiRomanToga} to="romanceMovies"/>
      <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries"/>
    </div>
  );
};

export default Menu;
