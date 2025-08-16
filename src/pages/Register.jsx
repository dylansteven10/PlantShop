// src/pages/Register.jsx
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    if (password1 !== password2) {
      setErr("Las contraseñas no coinciden.");
      return;
    }
    if (password1.length < 6) {
      setErr("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          apellido,
          celular,
          email,
          password: password1,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al registrarse");

      // Guardamos en redux el usuario autenticado
      dispatch(register(data));
      navigate("/cart"); // redirige al carrito
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="page" style={{ textAlign: "center", padding: 20 }}>
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "0 auto", textAlign: "left" }}>
        <label>Nombre *</label>
        <input
          type="text"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <label>Apellido *</label>
        <input
          type="text"
          value={apellido}
          required
          onChange={(e) => setApellido(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <label>Celular (opcional)</label>
        <input
          type="tel"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <label>Correo *</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <label>Nueva contraseña *</label>
        <input
          type="password"
          value={password1}
          required
          onChange={(e) => setPassword1(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <label>Confirmar contraseña *</label>
        <input
          type="password"
          value={password2}
          required
          onChange={(e) => setPassword2(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        {err && <div style={{ color: "tomato", marginBottom: 10 }}>{err}</div>}
        <button type="submit" style={{ padding: "8px 14px" }}>Crear cuenta</button>
      </form>
    </div>
  );
}
