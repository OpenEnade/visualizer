import http from '@/services/ApiService.js';

export default {
		async loadCourses({ commit }) {
			try {
				const allCourses = await http.getCourses();
				commit('LOAD_COURSES', allCourses);
				commit('LOAD_VALID_COURSES', allCourses);
			} catch (err) {
				console.error(err);
			}
		},
		async loadGradesByCourseName({ commit }, courseName) {
			try {
				const usefulGrades = await http.getGradesByName(courseName);
				commit('LOAD_GRADES_COURSE', usefulGrades);
				commit('LOAD_STATES');
				commit('LOAD_CITIES');
				commit('LOAD_CATEGORIES');
				commit('LOAD_MODALITIES');
				commit('LOAD_YEARS');
			} catch (err) {
				console.error(err);
			}
		},
		async loadGradesByCourseArea( { commit }, courseAreaCode ) {
			try {
				const usefulGrades = await http.getGradesByCourse(courseAreaCode);
				commit( 'LOAD_GRADES_BY_COURSE_AREA', usefulGrades);
			} catch (err) {
				console.log(err);
			}
		},
		persistGradeForDetail( { commit }, detailGradeCourse) {
			commit('PERSIST_GRADE_FOR_DETAIL', detailGradeCourse);
		},
		persistCoursesToCompare( { commit }, courses ) {
			commit('PERSIST_COURSES_TO_COMPARE', courses);
		},
		persistCourseName({ commit }, courseName) {
			commit('PERSIST_COURSE_NAME', courseName);
		},
		persistGrade( { commit }, grade ) {
			commit('PERSIST_GRADE', grade);
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
		filterByModalityAction( { commit }, modality ) {
			commit('UPDATE_BY_MODALITY', modality);
		},
		filterByYearAction( { commit }, year ) {
			commit('UPDATE_BY_YEAR', year);
		}
};
