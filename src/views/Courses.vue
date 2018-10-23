<template>
  <div class="courses">
    <Header />
    <br>
    <CourseSelector />
  </div>
</template>

<script>
// @ is an alias to /src
import CourseSelector from '@/components/CourseSelector.vue';

export default {
  name: 'Home',
  components: {
    CourseSelector,
  },
};
</script>
