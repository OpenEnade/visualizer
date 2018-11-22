import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'

export default {
    getCourses() {
        return axios.get('/cursos')
    }
}