import _ from 'lodash';
import {
	LOAD_UNIVERSITIES,
	LOAD_STATELIST,
	LOAD_CITYLIST,
	LOAD_MODALITYLIST,
	LOAD_CATEGORYLIST,
	LOAD_COURSESLIST,
	UPDATE_BYSTATE,
	UPDATE_BYCITY,
	UPDATE_BYCATEGORY,
	LOAD_NOTAS,
	LOAD_COURSESVALIDS,
} from './mutations-types.js';

export default {
  [LOAD_UNIVERSITIES]: (state, payload) => {
    state.universityList = _.uniq(payload).sort();
    state.universtitiesShowed = state.universityList;
  },
  [LOAD_STATELIST]: (state) => {
    state.stateList = _.uniq(state.universityList.map(
      (university => university.campus.estado.sigla)
    )).sort();
  },
  [LOAD_CITYLIST]: (state) => {
    state.cityList = _.uniq(state.universityList.map(
      (university => university.campus.nome)
    )).sort();
  },
  [LOAD_CATEGORYLIST]: (state) => {
    state.categoryList = _.uniq(state.universityList.map(
      (university => university.categoriaAdmin)
    )).sort();
  },
  [LOAD_COURSESLIST]: (state, payload) => {
    state.coursesList = payload;
  },
  [LOAD_COURSESVALIDS]: (state, payload) => {
    state.coursesValids = _.uniqBy(payload, 'nome').sort(function (previous, next) {
      return ('' + previous.nome).localeCompare(next.nome);
    });
    state.coursesValids.forEach( (course, i) => {
      course.nome = course.nome.toUpperCase();
    })
  },
  [UPDATE_BYSTATE] : (state, stateName) => {
    state.universtitiesShowed = state.universityList.filter (
      (university) => university.campus.estado.sigla === stateName
    );
  },
  [UPDATE_BYCITY] : (state, cityName) => {
    state.universtitiesShowed = state.universityList.filter (
      (university) => university.campus.nome === cityName
    );
  },
  [UPDATE_BYCATEGORY] : (state, categoryName) => {
    state.universtitiesShowed = state.universityList.filter (
      university => university.categoriaAdmin === categoryName
    );
  },
  [LOAD_NOTAS]: (state, payload) => {
    state.notasByCourse = payload;
  },
};
