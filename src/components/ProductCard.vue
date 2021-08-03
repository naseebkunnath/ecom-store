<template>
  <div class="col-3 mt-3" v-bind:style="{ marginRight: '4px' }">
    <div class="card h-100 text-left">
      <img class="w-100" :src="product.imageurl" alt />
      <div class="card-body">
        <h4 class="card-title">
          
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">{{ product.title }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    addToCart() {
        this.$store.commit("addToCart", this.product);
    }
  }
}

</script>