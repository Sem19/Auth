import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./componets/error-boundary/error-boundary.jsx";
import Login from "./pages/login/login.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="login"
            element={
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            }
          />
          <Route
            path="/forgot-password"
            element={<ErrorBoundary>{/* <CatalogPage /> */}</ErrorBoundary>}
          />
          <Route
            path="/reset-password"
            element={<ErrorBoundary>{/* <FavoritesPage /> */}</ErrorBoundary>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
