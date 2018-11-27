import _ from 'lodash';
import {
	LOAD_UNIVERSITIES,
	LOAD_STATES,
	LOAD_CITIES,
	LOAD_CATEGORIES,
	LOAD_COURSES,
	LOAD_VALID_COURSES,
	UPDATE_BY_STATE,
	UPDATE_BY_CITY,
	UPDATE_BY_CATEGORY,
	LOAD_GRADES,
  LOAD_GRADES_COURSE,
} from './mutations-types.js';

export default {
  [LOAD_UNIVERSITIES]: (state, payload) => {
    state.universityList = _.uniq(payload).sort();
    state.universtitiesShowed = state.universityList;
  },
  [LOAD_STATES]: (state) => {
    state.stateList = _.uniq(state.universityList.map(
      (university => university.campus.estado.sigla)
    )).sort();
  },
  [LOAD_CITIES]: (state) => {
    state.cityList = _.uniq(state.universityList.map(
      (university => university.campus.nome)
    )).sort();
  },
  [LOAD_CATEGORIES]: (state) => {
    state.categoryList = _.uniq(state.universityList.map(
      (university => university.categoriaAdmin)
    )).sort();
  },
  [LOAD_COURSES]: (state, payload) => {
    state.coursesList = payload;
  },
  [LOAD_VALID_COURSES]: (state, payload) => {
    state.coursesValids = _.uniqBy(payload, 'nome').sort(function (previous, next) {
      return ('' + previous.nome).localeCompare(next.nome);
    });
    state.coursesValids.forEach( (course, i) => {
      course.nome = course.nome.toUpperCase();
    })
  },
  [UPDATE_BY_STATE] : (state, stateName) => {
    state.universtitiesShowed = state.universityList.filter (
      (university) => university.campus.estado.sigla === stateName
    );
  },
  [UPDATE_BY_CITY] : (state, cityName) => {
    state.universtitiesShowed = state.universityList.filter (
      (university) => university.campus.nome === cityName
    );
  },
  [UPDATE_BY_CATEGORY] : (state, categoryName) => {
    state.universtitiesShowed = state.universityList.filter (
      university => university.categoriaAdmin === categoryName
    );
  },
  [LOAD_GRADES]: (state, payload) => {
    state.grades = payload;
  },
  [LOAD_GRADES_COURSE]: (state, courseName) => {
    state.gradesByCourse = state.grades.filter(
      (grade) => grade.curso.nome === courseName;
    )
  }
};
