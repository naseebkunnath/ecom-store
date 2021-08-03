<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>

import ProductCard from "./ProductCard.vue";

export default {
  name: 'Home',
  props: [ 'products' ],
  components: {
    ProductCard
  },
  computed: {
    cartTotalItems() {
      return this.$store.state.totalCount;
    },
  },
  methods: {
    incTotalCount() {
      this.$store.commit("incTotalCount");
    }
  }
}

</script>