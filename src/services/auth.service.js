import axios from "axios";
import userService from "./user.service";

const API_URL = "https://localhost:8080/";
class AuthService {
  async login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {

        if (response.headers) {

          localStorage.setItem("username", response.data.username);
          localStorage.setItem("accessToken", response.headers.authorization);
        }
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
  }

  //   register(User) {
  //     return axios.post(API_URL + "users", {
  //       username,
  //       email,
  //       password
  //     });
  //   }
  getCurrentUser() {
    return localStorage.getItem("user");
  }
  getCurrentUsername() {
    return localStorage.getItem("username");
  }
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}
export default new AuthService();