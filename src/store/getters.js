import _ from 'lodash';

export default {
	currentCourseGradeEmpty: state => {
		const currentCourseGrade = state.currentCourseGrade;
		return !Object.keys(currentCourseGrade).lenght === 0 && currentCourseGrade.constructor === Object;
	},
};
