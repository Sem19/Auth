import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import styles from "./../header/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_white.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        width={170}
        height={22}
        onClick={() => navigate}
      />
      <ul className={styles.NavLinks}>
        <li>
          <Link to="/" className={styles.NavLink}>
            Home
          </Link>
        </li>
      </ul>
      <div className={styles.acount}>
        <p>Acount</p>
        <div>
          <button
            className={styles.header_button}
            onClick={() => signOut(auth)}
          >
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
