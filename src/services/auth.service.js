import axios from "axios";

<<<<<<< Updated upstream
const API_URL = "https://localhost:8080/";
=======
const API_URL = "http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/";
>>>>>>> Stashed changes
class AuthService {
  login(username, password) {
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
        return response.headers.authorization;
      });
  }

  logout() {
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
    return localStorage.getItem("username");
  }
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}
export default new AuthService();