import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./assets/components/RequireAuth";
import useLocalStorage from "use-local-storage";
import { AuthContext } from "./AuthContext";
import Profile from "./pages/Profile";

export default function App() {
  const [token, setToken] = useLocalStorage(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route
      element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      }
        path="/dashboard"
      />
      <Route
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
        path="/profile"
      />
    </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

