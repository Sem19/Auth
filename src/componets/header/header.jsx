import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import styles from "./../header/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <h1>Logo</h1>
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
