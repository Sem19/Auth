import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export function PrivateRoute(props) {
  const [isLogined, setIsLogined] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLogined(!!user);
      setIsLoading(false);
    });
  }, []);

  // console.log(isLoading);
  if (isLoading) return <div>loading...</div>;
  if (isLogined) return <Outlet {...props} />;
  else return <Navigate to={"/login"} />;
}
