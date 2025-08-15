import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const products = useSelector(state => state.products.items);

  // Agrupar por categoría
  const grouped = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <main>
      <h2>Plantas de interior</h2>
      {Object.entries(grouped).map(([category, list]) => (
        <section key={category} aria-labelledby={`cat-${category}`}>
          <h3 id={`cat-${category}`}>{category}</h3>
          <div className="grid">
            {list.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      ))}
    </main>
  );
}
