import http from "./http";

class ProductService {
  getAll() {
    return http.get("/products");
  }
}

export default new ProductService();