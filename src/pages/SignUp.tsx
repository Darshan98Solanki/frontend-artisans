import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import AuthLayout from "../components/AuthLayout";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/signup", { email, password });
      localStorage.setItem("token", res.data.access_token);
      navigate("/profile");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSignup}>
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

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="auth-switch">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
