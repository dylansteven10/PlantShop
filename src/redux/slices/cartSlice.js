import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // {id, name, price, image, qty}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const exists = state.items.find(i => i.id === product.id);
      if (!exists) {
        state.items.push({ ...product, qty: 1 });
      }
    },
    incrementQty(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.qty += 1;
    },
    decrementQty(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        if (item.qty > 1) item.qty -= 1;
        else {
          // si llega a 1 y decrementan, lo quitamos
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, incrementQty, decrementQty, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
