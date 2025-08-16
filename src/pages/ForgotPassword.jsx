// src/pages/ForgotPassword.jsx
import { useState } from "react";
import { requestPasswordReset } from "../services/authService";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [devToken, setDevToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await requestPasswordReset(email);
      setSent(true);

      // En modo desarrollo, si backend devuelve el token lo guardamos
      if (data?.token) {
        setDevToken(data.token);
      }
    } catch (err) {
      console.error("Error en forgot password:", err);
      setSent(true); // igualmente mostramos el mensaje
    }
  };

  return (
    <div className="page" style={{ textAlign: "center", padding: 20 }}>
      <h2>Recuperar contraseña</h2>

      {!sent ? (
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 360, margin: "0 auto" }}
        >
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <button type="submit" style={{ padding: "8px 14px" }}>
            Enviar enlace
          </button>
        </form>
      ) : (
        <div>
          <p>
            Si el correo existe, te enviamos un enlace para restablecer tu
            contraseña.
          </p>

          {/* ⚡ Modo desarrollo: mostramos el enlace con token */}
          {devToken ? (
            <p style={{ fontSize: 14, opacity: 0.8 }}>
              (Dev) Puedes resetear ahora:{" "}
              <Link to={`/reset?token=${devToken}`}>
                Abrir enlace de restablecimiento
              </Link>
            </p>
          ) : (
            <p style={{ fontSize: 14, opacity: 0.6 }}>
              (Dev) Esperando token del backend...
            </p>
          )}
        </div>
      )}
    </div>
  );
}
