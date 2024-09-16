import styles from "./reset-password.module.css";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { getAuth, signOut, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = ({ password, confirm_password }) => {
    if (password !== confirm_password) {
      setError(
        "confirm_password",
        {
          type: "string",
          message: "Password dont match with confirm password",
        },
        { shouldFocus: true }
      );
      return;
    }
    const auth = getAuth();

    updatePassword(auth.currentUser, password).then(() => signOut(auth));
    toast.success("Password successfully changed!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src={logo}
            alt="logo"
            width={180}
            height={32}
          />
          <h1 className={styles.title}>Create new Password?</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.my_form}>
          <div className={styles.input_container}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={styles.input}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className={styles.input_container}>
            <label className={styles.label} htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              {...register("confirm_password", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Password do not match",
              })}
              className={styles.input}
            />
            {errors.confirm_password && (
              <p className={styles.error}>{errors.confirm_password.message}</p>
            )}
          </div>

          <button className={styles.button} type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
