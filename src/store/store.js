import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/ApiService.js';
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

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state: {
		universityList: [],
		universtitiesShowed: [],
		notasByCourse: [],
		notasShowed: [],
		stateList: [],
		cityList: [],
		categoryList: [],
		modalityList: ["Educação à Distância", "Educação Presencial"],
		yearList: [ 2017 ],
		coursesList: [],
		coursesValids: [],
		coursesToCompare: [],
	},
	getters: {
		validCourses: (state) => {
			return state.coursesList.filter(course => course);
		}
	},
	mutations: {
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
	},
	actions: {
		async loadNotas({ commit }, course) {
			try {
				const allNotas = await ApiService.getNotas();

				const expectedNotas = allNotas.filter( 
					nota => nota.info.codigoCurso === course.codigoCurso
				);
				commit('LOAD_NOTAS', expectedNotas);

			} catch (err) {
				console.error(err);
			}

		},
		async loadUniversitiesByCourse({ commit }, courseName) {
			try {
				const allUniversities = await ApiService.getUniversitiesByCourse(courseName);				
				commit('LOAD_UNIVERSITIES', allUniversities);
				commit('LOAD_STATELIST');
				commit('LOAD_CITYLIST');
				commit('LOAD_CATEGORYLIST');				
			} catch (err) {
				console.error(err);
			}	
		},
		async loadCourses({ commit }) {
			try {
				const allCourses = await ApiService.getCourses();
				commit('LOAD_COURSESLIST', allCourses);
				commit('LOAD_COURSESVALIDS', allCourses);
			} catch (err) {
				console.error(err);
			}
		},   
		filterByStateAction({ commit }, stateName) {
			commit('UPDATE_BYSTATE', stateName);			
		}, 
		filterByCityAction({ commit }, cityName) {
			commit('UPDATE_BYCITY', cityName);
		},
		filterCategoryAction({ commit }, categoryName) {
			commit('UPDATE_BYCATEGORY', categoryName);
		},
		compareCourses({ commit }, payload) {

		},
	},
})

export default store;