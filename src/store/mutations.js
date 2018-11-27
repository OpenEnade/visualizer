import _ from 'lodash';
import  * as type from './mutations-types.js';

export default {
  [type.PERSIST_COURSE_NAME]: (state, courseName) => {
    state.currentCourseName = courseName;
  },
  [type.LOAD_GRADES_COURSE] : (state, payload) => {
    state.gradesByCourse = payload;
    state.gradesByCourseOnTable = payload;
  },
  [type.LOAD_STATES]: (state) => {
    state.stateList = _.uniq(state.gradesByCourse.map(
      (grade => grade.info.universidade.campus.estado.sigla)
    )).sort();
  },
  [type.LOAD_CITIES]: (state) => {
    state.cityList = _.uniq(state.gradesByCourse.map(
      (grade => grade.info.universidade.campus.nome)
    )).sort();
  },
  [type.LOAD_CATEGORIES]: (state) => {
    state.categoryList = _.uniq(state.gradesByCourse.map(
      grade => grade.info.universidade.categoriaAdmin
    )).sort();
  },
  [type.LOAD_COURSES]: (state, payload) => {
    state.coursesList = payload;
  },
  [type.LOAD_MODALITIES]: state => {
    state.modalityList = _.uniq(state.gradesByCourse.map(
      grade => grade.info.curso.modalidade
    ))
  },
  [type.LOAD_YEARS]: state => {
    state.yearList = _.uniq(state.gradesByCourse.map(
      grade => grade.info.ano.ano
    ))
  },
  [type.LOAD_VALID_COURSES]: (state, payload) => {
    state.coursesValids = _.uniqBy(payload, 'nome').sort(function (previous, next) {
      return ('' + previous.nome).localeCompare(next.nome);
    });
    state.coursesValids.forEach( (course, i) => {
      course.nome = course.nome.toUpperCase();
    })
  },
  [type.UPDATE_BY_STATE] : (state, stateName) => {
    state.gradesByCourseOnTable = state.gradesByCourse.filter (
      (grade) => grade.info.universidade.campus.estado.sigla === stateName
    );
  },
  [type.UPDATE_BY_CITY] : (state, cityName) => {
    state.gradesByCourseOnTable = state.gradesByCourse.filter (
      (grade) => grade.info.universidade.campus.nome === cityName
    );
  },
  [type.UPDATE_BY_CATEGORY] : (state, categoryName) => {
    state.gradesByCourseOnTable = state.gradesByCourse.filter (
      grade => grade.info.universidade.categoriaAdmin === categoryName
    );
  },
  [type.UPDATE_BY_MODALITY] : (state, modality) => {
    state.gradesByCourseOnTable = state.gradesByCourse.filter(
      grade => grade.info.curso.modalidade
    )
  },
  [type.UPDATE_BY_YEAR] : (state, year) => {
    state.gradesByCourseOnTable = state.gradesByCourse.filter(
      grade => grade.info.ano.ano
    )
  },
};
