import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../db/data.json";

const getRandomNum = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomProducts = () => {
  const selectedProducts = productsData.filter(() => getRandomNum());

  return selectedProducts.map((item) => {
    const randomQuantity = getRandomNum(1, 10);

    const newItem = {
      ...item,
      quantity: randomQuantity,
      totalAmount: item.price * randomQuantity,
    };

    return newItem;
  });
};

const randomProducts = getRandomProducts();

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: randomProducts,
    totalQuantity: randomProducts.reduce(
      (total, { quantity }) => (total += quantity),
      0
    ),
    totalAmount: randomProducts.reduce(
      (total, { totalAmount }) => (total += totalAmount),
      0
    ),
  },
  reducers: {
    addProduct: (state, { payload: { id } }) => {
      state.totalQuantity++;

      const existingItem = state.products.find((item) => item.id === id);
      const product = productsData.find((elm) => elm.id === id);

      if (!existingItem) {
        state.products.push({
          ...product,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += product.price;
      }

      state.totalAmount += product.price;
    },
    removeProduct: (state, { payload: { id, quantity = 1 } }) => {
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        for (let i = 0; i < quantity; i++) {
          if (existingItem.quantity != 0) {
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
          }

          if (existingItem.quantity === 1) {
            state.products = state.products.filter((item) => item.id !== id);
          } else if (existingItem.quantity > 0) {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
          }
        }
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
