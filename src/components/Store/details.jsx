import { create } from "zustand";
import { Products } from "../../data/products";

// Validate products data
const validateProducts = (products) => {
  if (!Array.isArray(products)) {
    console.error("Products data is invalid");
    return [];
  }
  return products;
};

const useDetailsStore = create((set) => ({
  products: validateProducts(Products),
  selectedProduct: null,

  setSelectedProduct: (productId) => {
    const id = Number(productId);
    set((state) => ({
      selectedProduct: state.products.find((p) => p.id === id) || null,
    }));
  },

  clearSelectedProduct: () => set({ selectedProduct: null }),
}));

export default useDetailsStore;
