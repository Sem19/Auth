import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./componets/error-boundary/error-boundary.jsx";
import Login from "./pages/login/login.jsx";
import { PrivateRoute } from "./routes/privateRoute.jsx";
import Header from "./componets/header/header.jsx";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/home.jsx"));
const SignUp = lazy(() => import("./pages/signup/signup.jsx"));
const ForgotPassword = lazy(() => import("./pages/forgot/forgot-password.jsx"));
const ResetPassword = lazy(() => import("./pages/reset/reset-password.jsx"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/reset"
                element={
                  <ErrorBoundary>
                    <ResetPassword />
                  </ErrorBoundary>
                }
              />
            </Route>
            <Route
              path="/login"
              element={
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              }
            />
            <Route
              path="/signup"
              element={
                <ErrorBoundary>
                  <SignUp />
                </ErrorBoundary>
              }
            />
            <Route
              path="/forgot"
              element={
                <ErrorBoundary>
                  <ForgotPassword />
                </ErrorBoundary>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
