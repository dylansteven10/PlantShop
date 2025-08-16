// src/pages/Login.jsx
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

      // Guardamos en redux
      dispatch(login(data));

      // Redirige al carrito o a donde venía
      const redirect = params.get("redirect") || "/cart";
      navigate(redirect);
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="page" style={{ textAlign: "center", padding: 20 }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 360, margin: "0 auto" }}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        {err && <div style={{ color: "tomato", marginBottom: 10 }}>{err}</div>}
        <button type="submit" style={{ padding: "8px 14px" }}>Entrar</button>
      </form>

      <div style={{ marginTop: 10 }}>
        <Link to="/forgot">¿Olvidaste tu contraseña?</Link>
      </div>
      <div style={{ marginTop: 6 }}>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </div>
    </div>
  );
}
