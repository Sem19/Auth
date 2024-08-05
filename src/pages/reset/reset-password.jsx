import styles from "./reset-password.module.css";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};
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
              {...register("password", {})}
              className={styles.input}
            />
          </div>
          <div className={styles.input_container}>
            <label className={styles.label} htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              {...register("confirm_password", {})}
              className={styles.input}
            />
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
