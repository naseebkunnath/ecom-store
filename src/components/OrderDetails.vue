<template>

 <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
     <div class="card">
         <div class="card-header p-4">
             <a class="pt-2 d-inline-block" data-abc="true">Order Details</a>
             <div class="float-right">
                 <h3 class="mb-0">Invoice #{{ ("000000" + order.id).slice(-6) }}</h3>
                 Date: {{ formatDate(order.createdAt, 'MMMM Do YYYY, h:mm:ss A') }}
             </div>
         </div>
         <div class="card-body">
             <div class="row mb-4">
                 <div class="col-sm-6">
                     <h5 class="mb-3">From:</h5>
                     <h3 class="text-dark mb-1">Tejinder Singh</h3>
                     <div>29, Singla Street</div>
                     <div>Sikeston,New Delhi 110034</div>
                     <div>Email: contact@bbbootstrap.com</div>
                     <div>Phone: +91 9897 989 989</div>
                 </div>
                 <!--<div class="col-sm-6 ">
                     <h5 class="mb-3">To:</h5>
                     <h3 class="text-dark mb-1">{{ order.shippingAddress.firstName }} {{ order.shippingAddress.lastName }}</h3>
                     <div>{{ order.shippingAddress.address }}</div>
                     <div>{{ order.shippingAddress.region }}, {{ order.shippingAddress.zipCode }}</div>
                     <div>Email: {{ order.shippingAddress.email }}</div>
                     <div>Phone: {{ order.shippingAddress.phone }}</div>
                 </div>-->
             </div>
             <div class="table-responsive-sm">
                 <table class="table table-striped">
                     <thead>
                         <tr>
                             <th class="center">#</th>
                             <th>Item</th>
                             <th class="right">Unit Price</th>
                             <th class="center">Quantity</th>
                             <th class="right">Total Price</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr v-for="(item, index) in order.items" :key="item.id">
                             <td class="center">{{ index+1 }}</td>
                             <td class="left strong">{{ item.title }}</td>
                             <td class="right">₹{{ item.price }}</td>
                             <td class="center">{{ item.quantity }}</td>
                             <td class="right">₹{{ item.price * item.quantity }}</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
             <div class="row">
                 <div class="col-lg-4 col-sm-5">
                 </div>
                 <div class="col-lg-4 col-sm-5 ml-auto">
                     <table class="table table-clear">
                         <tbody>
                             <tr>
                                 <td class="left">
                                     <strong class="text-dark">Grand Total</strong>
                                 </td>
                                 <td class="right">₹{{ order.totalAmount }}</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white">
             <p class="mb-0">Thank You, Shop Again</p>
         </div>
     </div>
 </div>

</template>

<script>

import moment from 'moment';

import OrderService from "../services/OrderService";

export default {
  name: "OrderDetails",
  data() {
    return {
      order: {}
    };
  },
  mounted() {
    this.getOrder(this.$route.params.id);
  },
  methods: {
    formatDate(date, expFormat) {
        return moment(date).format(expFormat);
    },
    async getOrder(id) {
      const { data } = await OrderService.getOne(id);
      this.order = data;
    }
  }
};
</script>

<style scoped>

.padding {
    padding: 2rem !important
}

.card {
    margin-bottom: 30px;
    border: none;
    -webkit-box-shadow: 0px 1px 2px 1px rgba(154, 154, 204, 0.22);
    -moz-box-shadow: 0px 1px 2px 1px rgba(154, 154, 204, 0.22);
    box-shadow: 0px 1px 2px 1px rgba(154, 154, 204, 0.22)
}

.card-header {
    background-color: #fff;
    border-bottom: 1px solid #e6e6f2
}

h3 {
    font-size: 20px
}

h5 {
    font-size: 15px;
    line-height: 26px;
    color: #3d405c;
    margin: 0px 0px 15px 0px;
    font-family: 'Circular Std Medium'
}

.text-dark {
    color: #3d405c !important
}

</style>