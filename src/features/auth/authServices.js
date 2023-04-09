import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`${base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.get(
    `${base_url}user/getorderbyid/${id}`,
    config
  );
  return response.data;
};
const OrderStatus = async (data) => {
  const response = await axios.put(
    `${base_url}user/order/update-order`,data,
    config
  );

return response.data;
};
const authService = {
  login,
  getOrders,
  getOrder,
  OrderStatus
};

export default authService;
