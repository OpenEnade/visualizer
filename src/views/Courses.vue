<template>
  <div class="courses">
    <Header />
    <PageHeader description="Selecione um curso de seu interesse" />
    <CourseSelector />
  </div>
</template>

<script>
// @ is an alias to /src
import CourseSelector from '@/components/CourseSelector.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'Home',
  components: {
    CourseSelector,
    PageHeader,
  },
};
</script>
