import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import AuthLayout from "../components/AuthLayout";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.access_token);
      navigate("/profile");
    } catch(error:any){
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <button className="primary-btn" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
