import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://localhost:8080/';
const API_ENDPOINT = 'developers';
// class DeveloperService {
//     async getDevelopers() {
//         response = await axios.get(API_URL + API_ENDPOINT, { headers: authHeader() });


//     }

//     async addDeveloper(developer) {
//         response = await axios.post(API_URL + API_ENDPOINT, {
//             headers: authHeader(),
//             username: developer.username,
//             introduction: developer.password,
//             status: developer.firstName,
//             role: developer.role,
//         });


//     }

//     async removeDeveloper(developer) {
//         response = await axios.delete(API_URL + API_ENDPOINT, {
//             headers: authHeader(),
//             username: developer.username,
//             introduction: developer.password,
//             status: developer.firstName,
//             role: developer.role,
//         });
//     }

//     async getDevelopersByRole(role) {


//         response = await axios.delete(API_URL + API_ENDPOINT, {
//             headers: authHeader(),
//             username: developer.username,
//             introduction: developer.password,
//             status: developer.firstName,
//             role: developer.role,
//         });
//     }

//     async getDeveloperByProject(project) {
//         response = await axios.delete(API_URL + API_ENDPOINT, {
//             headers: authHeader(),
//             username: developer.username,
//             introduction: developer.password,
//             status: developer.firstName,
//             role: developer.role,
//         });
//     }

//     getDeveloperByResume(developer) {
//         return axios.delete(API_URL + API_ENDPOINT, {
//             headers: authHeader(),
//             username: developer.username,
//             introduction: developer.password,
//             status: developer.firstName,
//             role: developer.role,
//         });
//     }

// }
// export default new DeveloperService();