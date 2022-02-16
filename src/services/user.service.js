import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://localhost:8080/';
class UserService {
  getProjects() {
    return axios.get(API_URL + 'Projects', { headers: authHeader() });
  }
  
}
export default new UserService();