import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const inCart = items.some(i => i.id === product.id);

  const handleAdd = () => {
    if (!inCart) dispatch(addToCart(product));
  };

  return (
    <article className="card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div>
        <strong>{product.name}</strong>
      </div>
      <div className="price">${product.price.toFixed(2)}</div>
      <button
        className="btn"
        onClick={handleAdd}
        disabled={inCart}
        aria-disabled={inCart}
        aria-label={inCart ? 'Producto ya en el carrito' : 'Añadir al carrito'}
      >
        {inCart ? 'Añadido ✓' : 'Añadir a la cesta'}
      </button>
    </article>
  );
}
