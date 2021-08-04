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
        <li class="nav-item">
          <router-link to="/" class="nav-link">About</router-link>
        </li>
      </ul>

      <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <router-link to="/login" class="nav-link active">Login</router-link>
          <a @click="logout()" class="nav-link active">Logout</a>
          <router-link to="/signup" class="nav-link active">Signup</router-link>
        </ul>
      </div>
      &nbsp;&nbsp;
      <router-link to="/cart/checkout" class="btn btn-sm btn-success my-2 my-sm-0" type="button" title="View Cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;<span class="badge badge-pill badge-primary">{{ cartTotalItems }}</span></router-link>
    </div>
  </nav>
</template>

<script>

import auth from '../services/authService';
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: 'NavBar',
  computed: {
    cartTotalItems() {
      return this.$store.getters.totalCartItems;
    },
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