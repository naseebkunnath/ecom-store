<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">My E-Commerce Store</router-link>
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
          <router-link to="/" class="nav-link active">Login</router-link>
          <router-link to="/" class="nav-link active">Register</router-link>
        </ul>
        <button class="btn btn-success my-2 my-sm-0" type="button">Search</button>
      </div>
    </div>
  </nav>
  <router-view />
</template>