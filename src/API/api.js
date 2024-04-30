import axios from "axios";

const newRequests = axios.create({
  baseURL: "http://localhost:4000/api/users",
});

// http://localhost:4000
// baseURL: "https://ecommerceserver-7ucs.onrender.com/api/users"

export default newRequests;
