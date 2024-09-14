import styles from "./home.module.css";
import logo from "../../assets/logo.svg";
import firelogo from "../../assets/logo_f.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.logo_container}>
          <img
            className={styles.Logo}
            src={logo}
            alt="logo"
            width={180}
            height={32}
          />
          <img src={firelogo} width={640} height={340} alt="firebase" />
        </div>
      </div>
    </div>
  );
};
export default Home;
