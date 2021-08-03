<template>
  <product-list :products="products" />

  <p v-for="product in cart" :key="product.id">{{ product.title }}</p>

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
      return this.$store.state.totalCount;
    },
    products() {
      // return this.$store.state.products;
      return [
            {
                id : 1,
                title : "Chelsea Shoes",
                price : 200,
                description : "Best Drip in the Market",
                imageurl : "images/chelsea-shoes.png"
              },
              {
                id : 2,
                title : "Kimono",
                price : 50,
                description : "Classy, Stylish, Dope",
                imageurl : "images/kimono.png"
              },
              {
                id : 3,
                title : "Watch",
                price : 2500,
                description : "Elegance built in",
                imageurl : "images/rolex.png"
              },
              {
                id : 4,
                title : "Wallet",
                price : 80,
                description : "Sleek, Trendy, Clean",
                imageurl : "images/wallet.png"
              },
              {
                id : 5,
                title : "Lady Handbags",
                price : 230,
                description : "Fabulous, Exotic, Classy",
                imageurlurl : "images/handbag.png"
              },
              {
                id : 6,
                title : "Casual Shirts",
                price : 30,
                description : "Neat, Sleek, Smart",
                imageurl : "images/shirt.png"
              },
              {
                id : 7,
                title : "T Shirts",
                price : 30,
                description : "T Shirt",
                imageurl : "images/shirt.png"
              },
              {
                id : 8,
                title : "Towel",
                price : 60,
                description : "Towel",
                imageurl : "images/shirt.png"
              },
              {
                id : 9,
                title : "Tomato",
                price : 60,
                description : "Tomato",
                imageurl : "images/shirt.png"
              },
        ];
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    incTotalCount() {
      this.$store.commit("incTotalCount");
    }
  }
}

</script>