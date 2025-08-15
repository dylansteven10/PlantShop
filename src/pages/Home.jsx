import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero" role="img" aria-label="Fondo con plantas verdes">
      <div className="hero-card">
        <h1>PlantShop</h1>
        <p>
          En PlantShop nos apasionan las plantas de interior. Cuidamos cada detalle para que tu hogar
          respire naturaleza, bienestar y diseño.
        </p>
        <Link className="btn" to="/products">Comenzar</Link>
      </div>
    </section>
  );
}
