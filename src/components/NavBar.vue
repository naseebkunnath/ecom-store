<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Store</router-link>
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navb"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navb">
      <ul class="navbar-nav mr-auto">
        <li>
          
        </li>
      </ul>

      <router-link to="/login" class="color-white" v-if="!authUser">Login</router-link>&nbsp;&nbsp;
      
      <router-link to="/cart/checkout" class="btn btn-sm btn-light my-2 my-sm-0" type="button" title="Checkout"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;<span class="badge badge-pill badge-info">{{ cartTotalItems }}</span></router-link>
      &nbsp;&nbsp;
      <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto" v-if="authUser">
          <span class="btn btn-md btn-link">{{ authUser.name }}({{ authUser.email }})</span>
          <a @click="logout()" class="btn btn-md btn-link nav-link" title="Logout"><i class="fa fa-sign-out"></i></a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

import auth from '../services/authService';
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: 'NavBar',
  props: {
    authUser: Object
  },
  computed: {
    cartTotalItems() {
      return this.$store.getters.totalCartItems;
    }
  },
  methods: {
    logout() {
      auth.logout();

      toast.success("logged out successfully");
      this.$router.push('/');
    }
  }
}

</script>

<style scoped>
  .nav-link, .color-white {
    color:white;
  }
</style>