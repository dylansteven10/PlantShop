// src/pages/ResetPassword.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // <-- ahora es booleano
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Faltan datos");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await resetPassword(token, password);
      setSuccess(true); // ✅ marcamos éxito
      setMessage("Contraseña actualizada correctamente. Ahora puedes iniciar sesión.");
      setError("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Error al resetear:", err);
      setError("Error al restablecer la contraseña");
    }
  };

  return (
    <div className="page" style={{ textAlign: "center", padding: 20 }}>
      <h2>Restablecer contraseña</h2>

      {/* Mostrar form solo si no hay éxito */}
      {!success && (
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 360, margin: "0 auto" }}
        >
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ padding: "8px 14px" }}>
            Guardar
          </button>
        </form>
      )}

      {/* Mensajes */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && success === false && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
