/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export default {
  getCourses() {
    return axios.get('/cursos');
  },

  getUniversitiesByCourse(courseName) {
    return axios.get('/universidades')
      .then(response => response.data)
      .then((universidades) => {
        const universidadesByCourse = universidades.filter((universidade) => {
          for (let i = 0; i < universidade.cursos.length; i++) {
            if (universidade.cursos[i].nome === courseName) {
              return true;
            }
          }
          return false;
        });
        return universidadesByCourse;
      });
  },

  getUniversityGradesByYear(universityCode, year) {
    return axios.get(`/notas/filterby?universidade=${universityCode}&beginAno=${year}&endAno=${year}`)
      .then(response => response.data);
  }
};