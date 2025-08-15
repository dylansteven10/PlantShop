import { createSlice } from '@reduxjs/toolkit';

// 6 plantas con categorías (mín. 3 categorías)
const initialProducts = [
  {
    id: 'p1',
    name: 'Sansevieria (Lengua de suegra)',
    price: 18.99,
    image: 'https://alsolarvivero.com/cdn/shop/files/lengua-de-suegra.webp?v=1728400236&width=1946',
    category: 'Suculentas',
  },
  {
    id: 'p2',
    name: 'Monstera deliciosa',
    price: 34.50,
    image: 'https://theplantstore.cl/wp-content/uploads/2021/12/MNSTR_DLCS_MEDIUM_01-500x500.png',
    category: 'Tropicales',
  },
  {
    id: 'p3',
    name: 'Pothos dorado',
    price: 14.25,
    image: 'https://http2.mlstatic.com/D_NQ_NP_646157-MCO82006768379_012025-O.webp',
    category: 'Interior fácil',
  },
  {
    id: 'p4',
    name: 'Ficus lyrata',
    price: 42.00,
    image: 'https://mygarden.com.co/wp-content/uploads/2024/12/FICUS-PANDURATA-LYRATA-COMPRAR-A-DOMICILIO-CON-MATERA-DE-CEMENTO.png',
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
    image: 'https://www.hola.com/horizon/original_aspect_ratio/647cddaf7f49-calathea-orbifolia-04a-a.jpg',
    category: 'Tropicales',
  },
  {
    id: 'p7',
    name: 'Echeveria (Roseta de hojas Carnosas) ',
    price: 15.99,
    image: 'https://thumbs.dreamstime.com/b/plantas-de-echeveria-sobre-fondo-transparente-para-la-decoraci%C3%B3n-suculentos-potada-con-rosettes-carnosos-en-forma-hojas-tonos-375969663.jpg',
    category: 'Suculentas',
  },
  {
    id: 'p8',
    name: 'Aloe Vera (Propiedades medicinales)',
    price: 24.50,
    image: 'https://media.adeo.com/mkp/59bf328d9839ad4db8fea241b352ea8a/media.jpg?width=3000&height=3000&format=jpg&quality=80&fit=bounds',
    category: 'Suculentas',
  },
  {
    id: 'p9',
    name: 'Philodendron',
    price: 10.50,
    image: 'https://www.viverotierranegra.com/wp-content/uploads/2020/05/filodendro-glorioso.jpg',
    category: 'Tropicales',
  },
  {
    id: 'p10',
    name: 'Bromelia',
    price: 14.99,
    image: 'https://floristeriajara.com/wp-content/uploads/2024/05/Bromelia-Guzmania.webp',
    category: 'Tropicales',
  },
  {
    id: 'p11',
    name: 'Ficus Elastic',
    price: 12.00,
    image: 'https://mygarden.com.co/wp-content/uploads/2020/05/PLANTA-FICUS-ELASTICA-ROBUSTA-1-.jpg',
    category: 'Interior fácil',
  },
  {
    id: 'p12',
    name: 'Peperomia',
    price: 13.50,
    image: 'https://www.hola.com/horizon/original_aspect_ratio/99cbebc8c137-peperomia-planta-1-a.jpg',
    category: 'Interior fácil',
  },
  {
    id: 'p13',
    name: 'Pothos dorado',
    price: 14.25,
    image: 'https://http2.mlstatic.com/D_NQ_NP_646157-MCO82006768379_012025-O.webp',
    category: 'Interior fácil',
  },
  {
    id: 'p14',
    name: 'Palmera Bambù',
    price: 50.00,
    image: 'https://media.istockphoto.com/id/532611367/es/foto/planta-de-tropical.jpg?s=612x612&w=0&k=20&c=BdGMieF2ihBFnEUDakWfExRnXvfhZgVDcjo5HJoTewM=',
    category: 'Árboles de interior',
  },
  {
    id: 'p15',
    name: 'Tronco Brasileño',
    price: 39.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ifXKuZdVMAb9WWeg0P4chdU5GMdVZpDOLQ&s',
    category: 'Árboles de interior',
  },
  {
    id: 'p16',
    name: 'Palmera de Kentia',
    price: 85.00,
    image: 'https://dcdn-us.mitiendanube.com/stores/002/094/351/products/kenthia-bfef22d8dd0170c1dd17102948851988-480-0.jpg',
    category: 'Árboles de interior',
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
