import axios from 'axios';
import { User } from '../model/User';
import authHeader from './auth-header';
const API_URL = 'https://localhost:8080/';
class UserService {
  getProjects() {
    return axios.get(API_URL + 'Projects', { headers: authHeader() });
  }

  async getUserByUsername(username) {
    return axios.get(API_URL + 'users/' + username);
  }

  postUser(user) {
    return axios.post(API_URL + 'users', {
      headers: authHeader(),
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status,
    });
  }

  updateUser(user) {
    return axios.put(API_URL + 'users', {
      headers: authHeader(),
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status,
    });
  }

  postDeveloper(username) {
    return axios.post(API_URL + 'developers', {
      headers: authHeader(),
      username: username
    });
  }

  search(searchString) {
    return axios.get(API_URL + 'search/' + searchString);
  }

}
export default new UserService();