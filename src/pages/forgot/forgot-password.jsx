import { useForm } from "react-hook-form";
import styles from "./forgot-password.module.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cancel, setCancel] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  if (cancel) return <Navigate to="/login" />;

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
            onClick={() => setCancel(true)}
          >
            Cancel
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
