import axios from "axios";
import authHeader from './auth-header';
import authService from "./auth.service";

const API_URL = 'http://ec2-34-224-38-22.compute-1.amazonaws.com:8081/';
const API_ENDPOINT = 'resume';
class ResumeService {

    async getResumesByUsername(username) {
        let response = await axios.get(API_URL + 'Resumes', { headers: authHeader() });
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

    async getPublicResumesByUsername(username) {
        let response = await axios.get(API_URL + 'Resumes', { headers: authHeader() });
        const data = await response.data
        const list = []

        await data.forEach(element => {
            if (element.devUsername && element.status == "PUBLIC") {

                if (element.devUsername.username == username || element.devUsername == username) {
                    list.push(element)
                }
            }
        });
        return list;
    }

    postResume(resume) {
        let request = {
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: {
                username: authService.getCurrentUsername()
            }
        }
        return axios.post(API_URL + 'Resumes', request, { headers: authHeader() });
    }

    putResume(id, resume) {
        let request = {
            id: id,
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: {
                username: authService.getCurrentUsername()
            }
        }
        return axios.put(API_URL + 'Resumes/' + id, request, { headers: authHeader() });
    }

    getResumeById(id) {
        return axios.get(API_URL + 'Resumes/' + id, { headers: authHeader() });
    }

    deleteResume(id) {
        return axios.delete(API_URL + 'Resumes/' + id, { headers: authHeader() });
    }

}
export default new ResumeService();