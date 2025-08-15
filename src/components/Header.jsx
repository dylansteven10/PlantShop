import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const location = useLocation();

  // La cabecera aparece en /products y /cart (y en home también ayuda para navegar)
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="brand" to="/">
          🌱 PlantShop
        </Link>
        <nav className="nav" aria-label="Navegación principal">
          <Link to="/products" aria-current={location.pathname === '/products' ? 'page' : undefined}>Productos</Link>
          <Link className="cart-pill" to="/cart" aria-label={`Carrito con ${totalItems} artículos`}>
            🛒 <span>{totalItems}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
