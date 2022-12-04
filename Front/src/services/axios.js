import Axios from "axios";

export const crud = Axios.create({
  baseURL: "http://localhost:3001/",
});

export default crud;