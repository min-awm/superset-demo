import axios from "axios";

const axiosIns = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`,
});

export default axiosIns;
