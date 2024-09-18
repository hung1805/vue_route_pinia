import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  // Computed property to get the total number of products
  const totalProducts = computed(() => products.value.length);

  // Computed property to filter available (in-stock) products
  const availableProducts = computed(() => products.value.filter((product) => product.availability === "In Stock"));

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return {
    products,
    totalProducts,
    availableProducts,
    fetchProducts,
  };
});
