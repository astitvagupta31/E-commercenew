import axios from "axios";
const USER_BASE_URL = "http://127.0.0.1:5000/";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Token " + localStorage.getItem("token"),
};

class UserService {
  loginUser(credentials) {
    return axios.post(USER_BASE_URL + "/login", credentials);
  }
  // get user
  getUser() {
    console.log(headers);
    return axios.get(USER_BASE_URL, { headers: headers });
  }
}

export default UserService;