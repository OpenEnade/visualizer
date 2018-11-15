<template>
  <div class="container">
    <GChart
      :data="chartData"
      type="LineChart"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  name: 'Chart',
  components: {
    GChart,
  },
  props: ['courses'],
  data() {
    return {
      chartData: [],
    };
  },
  mounted: async function () {
    var newChartData = [
        ['Year']
    ];
    var universities = Object.keys(this.courses);
    universities.map((university) => {
      newChartData[0].push(university);
    });
    var years = Object.keys(this.courses[universities[0]]);
    await years.map(async (year, index) => {
      newChartData.push([year]);
      await universities.map((university) => {
          var newNote = this.courses[university][year]
          newChartData[index+1].push(newNote);
      });
    });
    this.chartData = newChartData;
  },
};
</script>

<style scoped>

</style>
