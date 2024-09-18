<template>
  <div>
    <p>{{ product.name }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
