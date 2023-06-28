import { randomColor } from "../../utils";
import { Link } from "react-scroll";

const MenuItem = (props) => {
  const { name, Icon, to } = props;
  return (
    <Link
      className="menuItem"
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
    >
      <Icon className="icon" style={{ color: randomColor(1) }} />
      <p className="name">{name}</p>
    </Link>
  );
};

export default MenuItem;
