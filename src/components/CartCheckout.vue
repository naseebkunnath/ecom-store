<template>
  <div class="container">
    <div class="py-4 text-center">
      <h2 class="co-heading">Checkout</h2>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <span class="badge badge-info badge-pill">{{ cartTotalItems }}</span>
            </h4>
            <ul class="list-group mb-3">
              <cart-item v-for="item in cartItems" :key="item.id" :item="item" />
              <li class="list-group-item d-flex justify-content-between">
                <strong>Total Amount</strong>
                <strong>${{ cartTotalPrice }}</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Shipping Address</h4>
            <form class="needs-validation" v-on:submit.prevent="handleCheckout">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    v-model="shippingAddress.firstName"
                    class="form-control"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    v-model="shippingAddress.lastName"
                    class="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="shippingAddress.email"
                  class="form-control"
                  placeholder="Enter  Email"
                />
              </div>

              <div class="mb-3">
                <label for="address">Address</label>
                <textarea
                  v-model="shippingAddress.address"
                  class="form-control"
                  id="address"
                  placeholder="Enter Address"
                ></textarea>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label>Region</label>
                  <input
                    type="text"
                    v-model="shippingAddress.region"
                    class="form-control"
                    placeholder="Enter Region"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    v-model="shippingAddress.zipCode"
                    class="form-control"
                    placeholder="Enter Zip Code"
                  />
                </div>
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Payment</h4>

              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from "joi";
import { useToast } from "vue-toastification";
const toast = useToast();
import CartItem from "./CartItem";
import OrderService from "../services/OrderService";

export default {
  name: "CartCheckout",
  components: {
    CartItem
  },
  data() {
    return {
      shippingAddress: {
        firstName: "NASEEB",
        lastName: "RAHMAN",
        email: "naseeb@test.mail",
        address: "test address",
        region: "test region",
        zipCode: "545454"
      }
    };
  },
  methods: {
    async handleCheckout() {
      const schema = Joi.object({
        firstName: Joi.string()
          .min(3)
          .max(50)
          .required(),
        lastName: Joi.string()
          .min(3)
          .max(50)
          .required(),
        email: Joi.string()
          .min(3)
          .max(128)
          .required(),
        address: Joi.string()
          .min(6)
          .max(128)
          .required(),
        region: Joi.string()
          .min(3)
          .max(50)
          .required(),
        zipCode: Joi.number().required()
      });

      try {
        await schema.validateAsync(this.shippingAddress);
      } catch (err) {
        return toast.error(err.details[0].message);
      }

      let order = {
        shippingAddress: this.shippingAddress,
        items: this.cartItems
      };

      // console.log(JSON.stringify(order));

      try {
        await OrderService.create(order);

        this.$store.commit("clearCart");

        toast.success("New order added successfully");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    cartTotalItems() {
      return this.$store.getters.totalCartItems;
    },
    cartItems() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    }
  }
};
</script>

<style scoped>
.co-heading {
  background: darkslategray;
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 3px;
  color: white;
}
</style>