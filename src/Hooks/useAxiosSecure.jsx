import axios from "axios";
import { useMemo } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, 
});


const useAxiosSecure = () => {
  const instance = useMemo(() => axiosSecure, []); // Memoize the axios instance
  return instance;
};

export default useAxiosSecure;
