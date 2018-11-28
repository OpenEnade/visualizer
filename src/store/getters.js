import _ from 'lodash';

export default {
	currentCourseGradeEmpty: state => {		
		return Object.keys(state.currentCourseGrade).lenght === 0;
	},
};
