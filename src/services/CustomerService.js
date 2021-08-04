import http from "./http";

class CustomerService {
  create(data) {
    return http.post("/customers", data);
  }
}

export default new CustomerService();
