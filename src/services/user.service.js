import axios from 'axios';
import { User } from '../model/User';
import authHeader from './auth-header';
<<<<<<< Updated upstream
const API_URL = 'https://localhost:8080/';
=======
const API_URL = 'http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/';
>>>>>>> Stashed changes
class UserService {
  getProjects() {
    return axios.get(API_URL + 'Projects', { headers: authHeader() });
  }

  postUser(user){
    return axios.post(API_URL + 'users', {
      headers: authHeader(),
      username : user.username,
      password : user.password,
      firstName : user.firstName,
      lastName : user.lastName,
      email : user.email,
      phoneNumber : user.phoneNumber,
      status : user.status,
    });
  }
  
}
export default new UserService();