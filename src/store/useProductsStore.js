import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  getProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
