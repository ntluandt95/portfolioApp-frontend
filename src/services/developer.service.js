import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://localhost:8080/";
const API_ENDPOINT = "developers";

class DeveloperService {
    async getDevelopers() {
        let response = await axios.get(API_URL + API_ENDPOINT, { headers: authHeader() });
        return response.data;
    }

    async addDeveloper(developer) {
        const response = await axios.post(API_URL + API_ENDPOINT + developer.username, {
            headers: authHeader(),
            username: developer.username,
            introduction: developer.password,
            status: developer.firstName,
            role: developer.role,
        });


    }

    async removeDeveloper(developer) {
        await axios.delete(API_URL + API_ENDPOINT, {
            headers: authHeader(),
            username: developer.username,
            introduction: developer.password,
            status: developer.firstName,
            role: developer.role,
        });
    }

    async getDevelopersByUsername(username) {
        const response = await axios.get(API_URL + API_ENDPOINT + "/" + username, {
            headers: authHeader()
        });

        return response.data;
    }

    async getDevelopersByRole(role) {
        const developers = await this.getDevelopers();
        const searchPhrase = new RegExp(role, "gi");
        const filteredDevelopers = developers.filter((dev) => {
            return dev.role.match(searchPhrase)
        })
    }

    async getDeveloperByProject(project) {
        return this.getDevelopersByUsername(project.devUsername.username);
    }

    async getDeveloperByResume(resume) {
        return this.getDevelopersByUsername(resume.devUsername.username);
    }

}
export default new DeveloperService();