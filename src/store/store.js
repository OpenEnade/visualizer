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
} from './mutations-types.js';

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state: {
		universityList: [],
		stateList: [],
		cityList: [],
		categoryList: [],
		modalityList: ["Educação à Distância", "Educação Presencial"],
		yearList: [ 2017 ],
		coursesList: [],
	},
	getters: {},
	mutations: {
		[LOAD_UNIVERSITIES] (state, payload) {										
			state.universityList = _.uniq(payload).sort();
		},
		[LOAD_STATELIST] (state) {
			state.stateList = _.uniq(state.universityList.map(
				(university => university.campus.estado.sigla)
			)).sort();
		},
		[LOAD_CITYLIST] (state) {
			state.cityList = _.uniq(state.universityList.map(
				(university => university.campus.nome)
			)).sort();
		},
		[LOAD_CATEGORYLIST] (state) {
			state.categoryList = _.uniq(state.universityList.map(
				(university => university.categoriaAdmin)
			)).sort();
		}, 
		[LOAD_COURSESLIST] (state, payload) {
			state.coursesList = _.uniqBy(payload, 'nome').sort(function (previous, next) {
				return ('' + previous.nome).localeCompare(next.nome);
			});
			state.coursesList.forEach( (course, i) => {
				course.nome = course.nome.toUpperCase();
			})
		},
	},
	actions: {
		async loadUniversities(context, courseName) {
			try {
				const allUniversities = await ApiService.getUniversitiesByCourse(courseName);				
				context.commit('LOAD_UNIVERSITIES', allUniversities);
				context.commit('LOAD_STATELIST');
				context.commit('LOAD_CITYLIST');
				context.commit('LOAD_CATEGORYLIST');				
			} catch (err) {
				console.error(err);
			}	
		},
		async loadCourses(context) {
			try {
				const allCourses = await ApiService.getCourses();
				context.commit('LOAD_COURSESLIST', allCourses);
			} catch (err) {
				console.error(err);
			}
		}
	},
})

export default store;