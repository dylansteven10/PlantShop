import { createSlice } from '@reduxjs/toolkit';

// 6 plantas con categorías (mín. 3 categorías)
const initialProducts = [
  {
    id: 'p1',
    name: 'Sansevieria (Lengua de suegra)',
    price: 18.99,
    image: 'https://picsum.photos/seed/sansevieria/500/400',
    category: 'Suculentas',
  },
  {
    id: 'p2',
    name: 'Monstera deliciosa',
    price: 34.50,
    image: 'https://picsum.photos/seed/monstera/500/400',
    category: 'Tropicales',
  },
  {
    id: 'p3',
    name: 'Pothos dorado',
    price: 14.25,
    image: 'https://picsum.photos/seed/pothos/500/400',
    category: 'Interior fácil',
  },
  {
    id: 'p4',
    name: 'Ficus lyrata',
    price: 42.00,
    image: 'https://picsum.photos/seed/ficus/500/400',
    category: 'Árboles de interior',
  },
  {
    id: 'p5',
    name: 'Cactus Echinopsis (lirio de Pascua)',
    price: 12.75,
    image: 'https://www.compo.de/dam/jcr:5e382c1a-8128-4670-9f96-a75044fe31b2/Kaktus%20Blumentopf.jpg?x=46&y=41',
    category: 'Suculentas',
  },
  {
    id: 'p6',
    name: 'Calathea orbifolia',
    price: 29.90,
    image: 'https://picsum.photos/seed/calathea/500/400',
    category: 'Tropicales',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: initialProducts,
  },
  reducers: {}
});

export default productsSlice.reducer;
