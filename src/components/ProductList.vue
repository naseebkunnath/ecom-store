<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>

import ProductCard from "./ProductCard.vue";

import ProductService from "../services/ProductService";

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  computed: {
    cartTotalItems() {
      return this.$store.state.totalCount;
    },
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const { data } = await ProductService.getAll();
      console.log(data);
      this.products = data;
    },
  }
}

</script>