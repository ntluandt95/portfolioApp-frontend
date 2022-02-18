import axios from "axios";
import authHeader from './auth-header';
const API_URL = 'https://localhost:8080/';
const API_ENDPOINT = 'resume';
class ResumeService {
    addResume (){
        return axios.post(API_URL + API_ENDPOINT, {
            headers: authHeaders(),
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: resume.devUsername

        } );

    }


    deleteResume(id){
        return axios.delete(API_URL + API_ENDPOINT, {
            headers: authHeaders(),
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: resume.devUsername

        });

    }

    getResume(id){
        return axios.get(API_URL + API_ENDPOINT, {
            headers: authHeaders()
        });
    }

    updateResume(resume){
        return axios.put(API_URL + API_ENDPOINT, {
            headers: authHeaders(),
            title: resume.title,
            link: resume.link,
            status: resume.status,
            devUsername: resume.devUsername
        });
    }

    getResumeByDeveloper(devUsername){
        return axios.get(API_URL +  API_ENDPOINT, { headers: authHeaders()});
    }

}