import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../services/login";
import styles from "./login.module.css";
import logo from "../../assets/logo.svg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";

const Login = () => {
  const [createPhysicianAvailability] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createPhysicianAvailability(data);
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };
  const handleGithubLogin = () => {
    console.log("Login with Google");
  };

  return (
    <div className={styles.login}>
      <div className={styles.logo_container}>
        <img
          className={styles.Logo}
          src={logo}
          alt="logo"
          width={180}
          height={32}
        />
        <h1 className={styles.title}>Log in to your account</h1>
        <div className={styles.quick_login}>
          <button className={styles.google_button} onClick={handleGoogleLogin}>
            <div className={styles.iconContainer}>
              <img src={google} alt="Google" className={styles.socialIcon} />
              <span>Google</span>
            </div>
          </button>
          <button className={styles.github_button} onClick={handleGithubLogin}>
            <div className={styles.iconContainer}>
              <img src={github} alt="GitHub" className={styles.socialIcon} />
              <span>GitHub</span>
            </div>
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}
      >
        <div className={styles.line_with_or}>
          <hr className={styles.line} />

          <span className={styles.or}>OR</span>
          <hr className={styles.line} />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.my_form}>
        <div>
          <input
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {})}
          />
          <a href="/forgot-password" className={styles.forgotPassword}>
            Forgot your password?
          </a>
        </div>

        <button className={styles.button} type="submit">
          Log in to Qencode
        </button>
      </form>
      <div className={styles.sign_up_link}>
        <span>Is your company new to Qencode? </span>
        <a href="/forgot-password" className={styles.sign_up}>
          Sign up
        </a>
      </div>
    </div>
  );
};
export default Login;
