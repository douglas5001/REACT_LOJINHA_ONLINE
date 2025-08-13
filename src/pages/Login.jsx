import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/auth-context";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/dashboard";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(email, password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Falha no login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          type="submit"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
}
