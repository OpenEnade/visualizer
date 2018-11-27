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
		async loadGradesByCourseName({ commit }, courseName) {
			try {
				const usefulGrades = await ApiService.getGradesByName(courseName);
				commit('LOAD_GRADES_COURSE', usefulGrades);
			} catch (err) {
				console.error(err);
			}
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
