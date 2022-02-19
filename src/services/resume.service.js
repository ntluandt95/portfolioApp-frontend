import axios from "axios";
import authHeader from './auth-header';
const API_URL = 'https://localhost:8080/';
const API_ENDPOINT = 'resume';
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
        return axios.delete(API_URL + API_ENDPOINT,+ '/' + id, {
            headers: authHeader()
          

        });

    }

    getResume(resume) {
        return axios.get(API_URL + API_ENDPOINT + '/' +resume, {
            headers: authHeader()
        });
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

    getAllResumes(){
        return axios.get(API_URL + API_ENDPOINT,{
            headers: authHeader()
            
        });
    }

}
export default new ResumeService