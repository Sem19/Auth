import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./componets/error-boundary/error-boundary.jsx";
import Login from "./pages/login/login.jsx";
import Home from "./pages/home/home.jsx";
import { PrivateRoute } from "./routes/privateRoute.jsx";
import Header from "./componets/header/header.jsx";
import SignUp from "./pages/signup/signup.jsx";
import ForgotPassword from "./pages/forgot/forgot-password.jsx";
import ResetPassword from "./pages/reset/reset-password.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
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
          <Route
            path="/reset"
            element={
              <ErrorBoundary>
                <ResetPassword />
              </ErrorBoundary>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
