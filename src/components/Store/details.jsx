// store.js
import { create } from "zustand";
import { Products } from "../../data/Product";

const useDetailsStore = create((set) => ({
  products: Products,
  selectedProduct: null,

  setSelectedProduct: (productId) => {
    console.log("Setting product with ID:", productId); // Debug
    console.log("Available products:", Products); // Debug
    const selected = Products.find((p) => p.id === productId);
    console.log("Found product:", selected); // Debug
    set({ selectedProduct: selected });
  },

  clearSelectedProduct: () => set({ selectedProduct: null }),
}));

export default useDetailsStore;
