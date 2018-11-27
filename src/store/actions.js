import ApiService from '@/services/ApiService.js';
export default {
		async loadUniversitiesByCourse({ commit }, courseName) {
			try {
				const allUniversities = await ApiService.getUniversitiesByCourse(courseName);
				commit('LOAD_UNIVERSITIES', allUniversities);
				commit('LOAD_STATES');
				commit('LOAD_CITIES');
				commit('LOAD_CATEGORIES');
			} catch (err) {
				console.error(err);
			}
		},
		async loadCourses({ commit }) {
			try {
				const allCourses = await ApiService.getCourses();
				commit('LOAD_COURSES', allCourses);
				commit('LOAD_VALID_COURSES', allCourses);
			} catch (err) {
				console.error(err);
			}
		},
		async loadGrades({ commit }) {
			try {
				const allGrades = await ApiService.getGrades();
				commit('LOAD_GRADES', allGrades);
			} catch (err) {
				console.error(err);
			}
		},
		loadNotasByCourseName({ commit }, courseName) {
				commit('LOAD_GRADES_COURSE', courseName);
		},
		persistCourseName({ commit }, courseName) {
			commit('PERSIST_COURSE_NAME', courseName);
		},
		filterByStateAction({ commit }, stateName) {
			commit('UPDATE_BY_STATE', stateName);
		},
		filterByCityAction({ commit }, cityName) {
			commit('UPDATE_BY_CITY', cityName);
		},
		filterCategoryAction({ commit }, categoryName) {
			commit('UPDATE_BY_CATEGORY', categoryName);
		},
};
