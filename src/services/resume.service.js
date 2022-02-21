import axios from "axios";
import authHeader from './auth-header';
const API_URL = 'https://localhost:8080/';
const API_ENDPOINT = 'Resumes';
class ResumeService {

    addResume(resume) {
        return axios.post(API_URL + API_ENDPOINT, {
            headers: authHeader(),
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: resume.devUsername

        });

    }


    deleteResume(id) {
        return axios.delete(API_URL + API_ENDPOINT, + '/' + id, {
            headers: authHeader()


        });

    }

    async getResume(resume) {
        const response = await axios.get(API_URL + API_ENDPOINT + '/' + resume, {
            headers: authHeader()
        });
        return response.data
    }

    updateResume(resume) {
        return axios.put(API_URL + API_ENDPOINT, {
            headers: authHeader(),
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: resume.devUsername
        });
    }

    async getAllResumes() {
        const response = await axios.get(API_URL + API_ENDPOINT, {
            headers: authHeader()

        });
        return response.data;
    }

}
export default new ResumeService();