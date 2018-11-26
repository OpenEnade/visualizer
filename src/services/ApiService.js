/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

axios.defaults.baseURL = 'https://open-enade-api.herokuapp.com/api';

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
  },

  async getCourseNotes(courses) {
    const result = [];
    const year = '2017';
    for (let i = 0; i < courses.length; i++) {
      const university = courses[i];
      const categoria = university.categoriaAdmin.toUpperCase();
      const universidade = university.codigoIES;
      const municipio = university.campus.codigo;
      const estado = university.campus.estado.sigla;
      const regiao = university.campus.estado.regiao.sigla;
      for (let j = 0; j < university.cursos.length; j++) {
        const newCourse = {
          universityName: university.nome,
          category: categoria,
        };
        const course = university.cursos[j];
        const courseCode = course.codigoCurso;
        let modalidade = course.modalidade.trim();
        newCourse.modality = modalidade;
        modalidade = modalidade.replace(/\s{1,}/g, '_').toUpperCase();
        modalidade = modalidade.replace(/Ç/g, 'C');
        modalidade = modalidade.replace(/Ã/g, 'A');
        modalidade = modalidade.replace(/À/g, 'A');
        modalidade = modalidade.replace(/Â/g, 'A');
        const notesResponse = await axios.get(`/notas/filterby?beginAno=${year}&categoria=${categoria}&curso=${courseCode}&endAno=${year}&estado=${estado}&modalidade=${modalidade}&municipio=${municipio}&regiao=${regiao}&universidade=${universidade}`);
        const notes = notesResponse.data[0].avaliacao;
        newCourse.enadeConcept = notes.enadeFaixa;
        newCourse.continuousConcept = parseFloat(notes.enadeContinuo.toFixed(2));
        newCourse.subscribed = notes.concluintesInscritos;
        newCourse.participants = notes.concluintesParticipantes;
        newCourse.grossScore = parseFloat(notes.notaBrutaCE.toFixed(2));
        newCourse.standardScore = parseFloat(notes.notaPadronizadaCE.toFixed(2));
        newCourse.average = parseFloat(notes.notaPadronizadaFG.toFixed(2));
        newCourse.courseCode = notesResponse.data[0].info.curso.codigoCurso;
        result.push(newCourse);
      }
    }
    return result;
  },

};
