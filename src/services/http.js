import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();

axios.defaults.baseURL = process.env.ECOM_BACK_API_URL;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured.");
  } else {
    if (error.response && error.response.status === 400) {
      if(error.response.data.code && error.response.data.code == 'E_MISSING_OR_INVALID_PARAMS') {
        toast.error("Invalid Input");
      }
    }
  }

  return Promise.reject(error);
});

export function setJWT(jwt) {
  axios.defaults.headers.common["Authorization"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT
};