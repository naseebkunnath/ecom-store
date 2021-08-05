<template>
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="email" type="text" class="form-control" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input v-model="password" type="password" class="form-control" placeholder="Enter Password">
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Login</button>
                <div>
                  <div class="d-flex justify-content-center links mt-3">
                    Don't have an account?&nbsp;&nbsp;<router-link to="/signup">Sign Up</router-link>
                  </div>
                </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import _ from 'underscore';
import Joi from 'joi';
import { useToast } from "vue-toastification";
const toast = useToast();

import auth from '../services/authService';

export default {
  name: 'CustomerLogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      const schema = Joi.object({
        email: Joi.string().min(8).max(128).required(),
        password: Joi.string().min(6).max(50).required()
      });

      try {
        var input = await schema.validateAsync(_.pick(this, [ 'email', 'password' ]));
      }
      catch (err) {
        return toast.error(err.details[0].message);
      }

      var response = await auth.login(input.email, input.password);
      
      if(response === true) {
        toast.success("logged in successfully");
        this.$router.push('/');
      } else {
        return toast.error('Invalid email or password');
      }
    }
  }
}

</script>

<style scoped>
    .btn-login {
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
        padding: 0.75rem 1rem;
    }
</style>