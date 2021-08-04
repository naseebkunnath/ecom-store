import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();

axios.defaults.baseURL = 'http://localhost:1337/api'; //process.env.VUE_APP_API_URL;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};