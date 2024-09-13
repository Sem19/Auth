import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { updateIsLogin } from "../features/login/login-slice";

export function PrivateRoute(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLogined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setIsLoading(false);
      dispatch(updateIsLogin(true));
    });
  }, []);

  // console.log(isLoading);
  if (isLoading) return <div>loading...</div>;
  if (isLoggedIn) return <Outlet {...props} />;
  else return <Navigate to={"/login"} />;
}
