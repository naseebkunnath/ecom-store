<template>
  <product-list />
</template>

<script>

import ProductList from "./ProductList.vue";

export default {
  name: 'Home',
  components: {
    ProductList
  },
  computed: {
    cartTotalItems() {
      return this.$store.getters.totalCartItems;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
}

</script>