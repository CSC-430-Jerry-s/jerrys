// src/app/auth/LoginPage.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path (default to home)
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>WELCOME BACK</h1>
          <p>Sign in to access your account and continue shopping.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="auth-actions">
            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? "SIGNING IN..." : "LOGIN"}
            </button>
            <button
              type="button"
              className="auth-clear-btn"
              onClick={handleClear}
            >
              CLEAR
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/signup" state={{ from: location.state?.from }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
