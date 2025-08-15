# 🌱 PlantShop Redux

Aplicación web de tienda de plantas desarrollada con **React + Vite** y **Redux Toolkit** para la gestión de estado global.  
Proyecto realizado como entrega final, cumpliendo con buenas prácticas de accesibilidad y validación de código.

---

## 📸 Vista previa

![Portada de PlantShop](./src/assets/cover.jpg) <!-- Cambia esta ruta si tu imagen de portada está en otra carpeta -->

🔗 **Demo en vivo:** [https://plantshop.vercel.app](https://plantshop.vercel.app)  
🔗 **Repositorio GitHub:** [https://github.com/dylansteven10/PlantShop](https://github.com/dylansteven10/PlantShop)

---

## 📂 Estructura del proyecto

```plaintext
plant-shop-redux/
│
├── public/                # Recursos públicos
├── src/
│   ├── assets/             # Imágenes y recursos estáticos
│   ├── components/         # Componentes reutilizables (Header, ProductCard, etc.)
│   ├── features/           # Slices de Redux (cartSlice.js, productsSlice.js)
│   ├── pages/              # Vistas (Home, Products, Cart)
│   ├── store.js            # Configuración Redux Store
│   ├── App.jsx             # Componente raíz
│   ├── main.jsx            # Entrada principal
│   └── styles/             # Estilos CSS
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
