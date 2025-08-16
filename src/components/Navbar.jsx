import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">🌱 PlantShop</div>
      <div className="nav-links">
        {user ? (
          <div className="user-info">
            <img
              src={user.foto ? `http://localhost:5000/uploads/${user.foto}` : "/default-avatar.png"}
              alt="foto perfil"
              className="avatar"
            />
            <span>{user.nombre} {user.apellido}</span>
          </div>
        ) : (
          <span>Invitado</span>
        )}
      </div>
    </nav>
  );
}
