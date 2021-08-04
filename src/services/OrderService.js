import http from "./http";

class OrderService {
  create(data) {
    return http.post("/orders", data);
  }
}

export default new OrderService();
