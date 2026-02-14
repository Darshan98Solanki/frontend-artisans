import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/SecureRoute";
import { useEffect, useState } from "react";
import api from "./services/api";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

export default function App() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setChecking(false);
        return;
      }

      try {
        await api.get("/auth/verify");
        navigate("/profile");
      } catch {
        localStorage.removeItem("token");
      } finally {
        setChecking(false);
      }
    };

    verify();
  }, []);

  if (checking) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  );
}
