import axios from 'axios';
import authHeader from './auth-header';
import authService from './auth.service';
const API_URL = "https://localhost:8081/";

class ProjectService {
    getProjects() {
        return axios.get(API_URL + 'Projects', { headers: authHeader() });
    }

    getProjectById(id) {
        return axios.get(API_URL + 'Projects/' + id, { headers: authHeader() });
    }

    async getProjectsByUsername(username) {
        let response = await axios.get(API_URL + 'Projects', { headers: authHeader() });
        const data = await response.data
        const list = []

        await data.forEach(element => {
            if (element.devUsername) {

                if (element.devUsername.username == username || element.devUsername == username) {
                    list.push(element)
                }
            }
        });
        return list;
    }



    postProject(project) {
        let request = {

            name: project.name,
            description: project.description,
            deploymentlink: project.deploymentlink,
            imgLink: project.imgLink,
            githublink: project.githublink,
            status: project.status,
            devUsername: {
                username: authService.getCurrentUsername()
            }
        }
        //console.log(request)
        return axios.post(API_URL + 'Projects', request, { headers: authHeader() });
    }

    putProject(id, project) {
        console.log(project.status)
        let request = {
            id: id,
            name: project.name,
            description: project.description,
            deploymentlink: project.deploymentlink,
            imgLink: project.imgLink,
            githublink: project.githublink,
            status: project.status,
            devUsername: {
                username: authService.getCurrentUsername()
            }
        }

        console.log(request)
        return axios.put(API_URL + 'Projects/' + id, request, { headers: authHeader() });


    }

    deleteProject(id) {
        return axios.delete(API_URL + 'Projects/' + id, { headers: authHeader() });
    }

}
export default new ProjectService();