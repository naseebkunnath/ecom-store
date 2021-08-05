import http from "./http";
import store from '../store';

class OrderService {
  create(data) {
    http.setJWT(store.getters.token);
    return http.post("/orders", data);
  }
}

export default new OrderService();
