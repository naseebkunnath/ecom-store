<template>
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
          <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
          <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label>Name</label>
              <input v-model="name" type="text" class="form-control" placeholder="Enter Name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="text" class="form-control" placeholder="Enter Email" />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input v-model="phone" type="text" class="form-control" placeholder="Enter Phone" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import Joi from "joi";
import { useToast } from "vue-toastification";
const toast = useToast();

import auth from "../services/authService";
import CustomerService from "../services/CustomerService";

export default {
  name: "CreateCustomer",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: ""
    };
  },
  methods: {
    async onSubmit() {
      const schema = Joi.object({
        name: Joi.string()
          .min(3)
          .max(50)
          .required(),
        email: Joi.string()
          .min(8)
          .max(128)
          .required(),
        phone: Joi.string()
          .min(5)
          .max(32)
          .required(),
        password: Joi.string()
          .min(6)
          .max(50)
          .required()
      });

      try {
        var customer = await schema.validateAsync(
          _.pick(this, ["name", "email", "phone", "password"])
        );

        const response = await CustomerService.create(customer);
        console.log(15, response, 30);
        auth.loginWithJWT(response.data["AccessToken"]);

        toast.success("Sign up done successfully");
        this.$router.push("/");
      } catch (err) {
        return toast.error(err.details[0].message);
      }
    }
  }
};
</script>