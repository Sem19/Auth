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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateUserName(user.email));
      } else {
        dispatch(updateUserName(null));
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated) return <Outlet {...props} />;
  else return <Navigate to="/login" />;
}
