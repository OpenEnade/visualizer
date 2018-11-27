/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

axios.defaults.baseURL = 'https://open-enade-api.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.withCredentials = false;

export default {
  getGrades() {
    return axios.get('/notas').then(response => response.data);
  },
  getCourses() {
    return axios.get('/cursos')
      .then(response => response.data);
  },
  getUniversitiesByCourse(courseName) {
    return axios.get(`/universidades/cursos?nomeCurso=${courseName}`)
      .then(response => response.data);
  },
  getUniversityGradesByYear(universityCode, year) {
    return axios.get(`/notas/filterby?universidade=${universityCode}&beginAno=${year}&endAno=${year}`)
      .then(response => response.data);
  },
  getModalities() {
    return axios.get('/modalidades');
  }
};
