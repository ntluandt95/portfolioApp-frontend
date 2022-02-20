import axios from 'axios';
import { Project } from '../model/Project';
import authHeader from './auth-header';
const API_URL = 'http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/';
class ProjectService {
  getProjects() {
    return axios.get(API_URL + 'Projects', { headers: authHeader() });
  }

  async getProjectsByUsername(username) {
    return axios.get(API_URL + 'Projects/' + username);
  }

  postProject(project) {
    let request = {
      headers: authHeader(),
      name: project.name,
      description: project.description,
      deploymentlink: project.deploymentlink,
      imgLink: project.imgLink,
      githublink: project.githublink,
      status: project.status,
      devUsername: {
        username: project.devUsername
      }
    }

    //console.log(request)
    return axios.post(API_URL + 'Projects', {
      headers: authHeader(),
      name: project.name,
      description: project.description,
      deploymentlink: project.deploymentlink,
      imgLink: project.imgLink,
      githublink: project.githublink,
      status: project.status,
      devUsername: {
        username: project.devUsername
      }
    });


  }

}
export default new ProjectService();