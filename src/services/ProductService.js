import http from "./http";
import store from '../store';

class ProductService {
  getAll() {
    http.setJWT(store.getters.token);
    return http.get("/products");
  }
}

export default new ProductService();