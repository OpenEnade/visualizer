import ApiService from '@/services/ApiService.js';
export default {
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
};
