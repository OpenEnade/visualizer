export default {
  validCourses: (state) => {
    return state.coursesList.filter(course => course);
  }
};
