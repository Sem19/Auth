import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import logo from "../../assets/logo.svg";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../features/login/login-slice";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const userName = useSelector((state) => state.login.userName);
  const isAuthenticated = !!userName;

  const onSubmit = ({ email, password }) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(updateUserName(email));
      })
      .catch(() => {
        setError(
          "email",
          {
            type: "string",
            message: "Wrong email or password",
          },
          { shouldFocus: true }
        );
      })
      .finally(() => setIsLoading(false));
  };

  if (isAuthenticated) return <Navigate to="/" />;

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
          <h1 className={styles.title}>Log in to your account</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.my_form}>
          <div>
            <input
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Incorrect format Email",
                },
              })}
            />

            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {})}
            />
            <Link to="/forgot" className={styles.forgotPassword}>
              Forgot your password?
            </Link>
          </div>

          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={15} /> : "Log in to Qencode"}
          </button>
        </form>
        <div className={styles.sign_up_link}>
          <span>Is your company new to Qencode? </span>
          <Link href="/signup" className={styles.sign_up}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
