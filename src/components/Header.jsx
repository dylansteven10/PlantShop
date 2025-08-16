import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";

export default function Header() {
  const items = useSelector((state) => state.cart.items);
  const { user } = useSelector((state) => state.user);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link className="brand" to="/">
          🌱 PlantShop
        </Link>
        <nav className="nav" aria-label="Navegación principal">
          <Link
            to="/products"
            aria-current={location.pathname === "/products" ? "page" : undefined}
          >
            Productos
          </Link>

          <Link
            className="cart-pill"
            to="/cart"
            aria-label={`Carrito con ${totalItems} artículos`}
          >
            🛒 <span>{totalItems}</span>
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                aria-current={location.pathname === "/login" ? "page" : undefined}
              >
                Login
              </Link>
              <Link
                to="/register"
                aria-current={location.pathname === "/register" ? "page" : undefined}
              >
                Registro
              </Link>
            </>
          ) : (
            <>
              <span style={{ margin: "0 10px" }}>👤 {user.name}</span>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
