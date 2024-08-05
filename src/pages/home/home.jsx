import styles from "./home.module.css";
import logo from "../../assets/logo.svg";

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
          <h1 className={styles.title}>Wellcome</h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
