import axios from "axios";

axios.defaults.baseURL = "https://afghanistan-api-ba73e497f12e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;