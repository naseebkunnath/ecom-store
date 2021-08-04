import http from "./http";

class OrderService {
  addNew(data) {
    return http.post("/orders", data);
  }
}

export default new OrderService();
