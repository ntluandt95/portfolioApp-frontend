import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://localhost:8081/';
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
    return axios.put(API_URL + 'users/' + user.username, {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      status: user.status
    },
      { headers: authHeader() }
    );
  }

  postDeveloper(username) {
    return axios.post(API_URL + 'developers', {
      username: username
    },
      { headers: authHeader() }
    );
  }

  search(searchString) {
    return axios.get(API_URL + 'search/' + searchString);
  }

}
export default new UserService();