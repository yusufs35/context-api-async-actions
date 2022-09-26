import axios from "axios";
import { settings } from "../utils/settings";

const API_URL = settings.apiUrl;

const getVehicles = () => {
  return axios.get(`${API_URL}/car/visitors/all`);
};

export { getVehicles };
