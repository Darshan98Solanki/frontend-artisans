import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";
import Loader from "../components/Loader";

interface User {
  id: number;
  email: string;
  signUpOn: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch {
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) {
    return <Loader />
  }

  return (
    <div className="container">
      <motion.div
        className="card profile-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="profile-header">
          <div className="avatar">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <h2>{user.email}</h2>
        </div>

        <div className="profile-info">
          <p><strong>Joined:</strong> {new Date(user.signUpOn).toLocaleString()}</p>
        </div>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </motion.div>
    </div>
  );
}
