import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import styles from "./../header/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_white.svg";
import { useSelector } from "react-redux";
// onClick={() => signOut(auth)}

const Header = () => {
  const isLogined = useSelector((state) => state.login.isLogined);
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
      <div className={styles.acount}>
        {isLogined && <button onClick={() => signOut(auth)}>Log out</button>}
      </div>
    </nav>
  );
};
export default Header;
