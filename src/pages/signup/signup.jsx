import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import styles from "./signup.module.css";
import logo from "../../assets/logo.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password);
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
          <h1 className={styles.title}>Registration</h1>
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
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button className={styles.button} type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
