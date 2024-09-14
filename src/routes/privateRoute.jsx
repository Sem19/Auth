import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../features/login/login-slice";

export function PrivateRoute(props) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.login.userName);
  const isAuthenticated = !!userName;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      dispatch(updateUserName(user.email));
    });
  }, []);
  console.log(userName);

  if (isLoading) return <div>loading...</div>;
  if (isAuthenticated) return <Outlet {...props} />;
  else return <Navigate to={"/login"} />;
}
