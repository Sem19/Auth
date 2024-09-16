import { useForm } from "react-hook-form";
import styles from "./forgot-password.module.css";
import logo from "../../assets/logo.svg";
import { auth } from "../../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendPasswordResetEmail(auth, data.email);
  };

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
          <h1 className={styles.title}>Forgot Password?</h1>
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
          <button className={styles.button} type="submit">
            Send
          </button>
          <button
            className={styles.cancel_button}
            type="button"
            onClick={() => navigate("/login")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
