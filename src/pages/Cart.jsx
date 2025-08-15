import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart, clearCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const money = (n) => n.toLocaleString('es-CO', { style: 'currency', currency: 'USD' });

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <main>
      <h2>Tu carrito</h2>

      <p><strong>Total de plantas:</strong> {totalItems}</p>
      <p><strong>Costo total:</strong> {money(totalPrice)}</p>

      {items.length === 0 ? (
        <p>Tu carrito está vacío. <Link to="/products">Ir a productos</Link></p>
      ) : (
        <>
          <table className="cart-table" aria-label="Tabla de productos en el carrito">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img className="cart-img" src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{money(item.price)}</td>
                  <td>
                    <div className="qty-row" role="group" aria-label={`Cantidad de ${item.name}`}>
                      <button className="icon-btn" onClick={() => dispatch(decrementQty(item.id))} aria-label="Disminuir cantidad">−</button>
                      <strong>{item.qty}</strong>
                      <button className="icon-btn" onClick={() => dispatch(incrementQty(item.id))} aria-label="Aumentar cantidad">＋</button>
                    </div>
                  </td>
                  <td>{money(item.qty * item.price)}</td>
                  <td>
                    <button className="btn btn-outline" onClick={() => dispatch(removeFromCart(item.id))}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="totals">
            <div>Total: {money(totalPrice)}</div>
          </div>

          <div className="actions">
            <button className="btn btn-outline" onClick={() => alert('Próximamente')}>Pagar</button>
            <Link className="btn" to="/products">Seguir comprando</Link>
            <button className="btn btn-outline" onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
          </div>
        </>
      )}
    </main>
  );
}
