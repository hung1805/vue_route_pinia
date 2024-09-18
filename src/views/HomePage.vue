<template>
  <div class="w-full px-5 lg:px-20 py-3">
    <div v-if="!products.length">Loading...</div>
    <div v-else>
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductItem from "@/components/product/ProductItem.vue";
import { onMounted } from "vue";
import { useProductStore } from "@/store/products/productStore.js";
const productStore = useProductStore();
const products = productStore.products;
onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped></style>
