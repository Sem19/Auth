import styles from "./../header/header.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_white.svg";
import { useSelector } from "react-redux";
import AccountMenu from "../account-menu/account-menu.jsx";

const Header = () => {
  const userName = useSelector((state) => state.login.userName);
  const isAuthenticated = !!userName;
  const navigate = useNavigate();
  return (
    <nav className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        width={170}
        height={22}
        onClick={() => navigate("/login")}
      />
      {userName && (
        <div className={styles.acount}>
          <p style={{ color: "white" }}>{userName}</p>
          <AccountMenu />
        </div>
      )}
    </nav>
  );
};
export default Header;
