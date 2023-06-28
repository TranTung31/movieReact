import "./Navbar.scss";
import LogoNetflix from "../../assests/images/Logo_Netflix_GG.png";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [keywords, setKeyWords] = useState("");
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeyWords(keywords);
    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate('/');
    }
  }
  const goHome = () => {
    navigate('/');
    setKeyWords('');
  }
  return (
    <div className="navigation">
      <div className="navContainer">
        <div onClick={goHome}>
          <img src={LogoNetflix} alt="" className="logo" />
        </div>

        <div className="navSearch">
          <MdSearch className="iconSearch" />

          <input
            type="text"
            placeholder="Input title, genres, people"
            className="inputSearch"
            onChange={handleChangeInput}
            value={keywords}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
