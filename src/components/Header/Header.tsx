import "./Header.css";
import Logo from "../../../assets/images/logo-teste.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo"/>
    </header>
  );
};

export default Header;
