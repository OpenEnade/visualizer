import _ from 'lodash';
import  * as type from './mutations-types.js';

export default {
  [type.LOAD_UNIVERSITIES]: (state, payload) => {
    state.universityList = _.uniq(payload).sort();
    state.universtitiesShowed = state.universityList;
  },
  [type.LOAD_STATES]: (state) => {
    state.stateList = _.uniq(state.universityList.map(
      (university => university.campus.estado.sigla)
    )).sort();
  },
  [type.LOAD_CITIES]: (state) => {
    state.cityList = _.uniq(state.universityList.map(
      (university => university.campus.nome)
    )).sort();
  },
  [type.LOAD_CATEGORIES]: (state) => {
    state.categoryList = _.uniq(state.universityList.map(
      (university => university.categoriaAdmin)
    )).sort();
  },
  [type.LOAD_COURSES]: (state, payload) => {
    state.coursesList = payload;
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
    state.universtitiesShowed = state.universityList.filter (
      (university) => university.campus.estado.sigla === stateName
    );
  },
  [type.UPDATE_BY_CITY] : (state, cityName) => {
    state.universtitiesShowed = state.universityList.filter (
      (university) => university.campus.nome === cityName
    );
  },
  [type.UPDATE_BY_CATEGORY] : (state, categoryName) => {
    state.universtitiesShowed = state.universityList.filter (
      university => university.categoriaAdmin === categoryName
    );
  },
  [type.LOAD_GRADES]: (state, payload) => {
    state.grades = payload;
  },
  [type.PERSIST_COURSE_NAME]: (state, courseName) => {
    state.currentCourseName = courseName;
  }
};
