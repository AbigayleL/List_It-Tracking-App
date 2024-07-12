import "./Header.scss";
import logo from "../../assets/logo/list-logo-bg.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header__container">
      <div className="header-logo__container">
        <Link to={`/`}>
          <img className="logo__image" src={logo} alt="ListIt Logo" />
        </Link>
      </div>

      <div className="user">
        <h2>Channy</h2>
        <div className="avatar-container"></div>
      </div>
    </header>
  );
};

export default Header;
