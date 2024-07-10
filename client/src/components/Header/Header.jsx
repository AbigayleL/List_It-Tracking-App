import "./Header.scss";
import logo from "../../assets/logo/list-logo-bg.png";

export const Header = () => {
  return (
    <header className="header__container">
      <div className="header-logo__container">
        <img className="logo__image" src={logo} alt="ListIt Logo" />
      </div>

      <div className="user">
        <h2>Channy</h2>
        <div className="avatar-container"></div>
      </div>
    </header>
  );
};

export default Header;
