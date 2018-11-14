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
      chartData: [
        ['Year', 'UEPB', 'UFPB', 'UFCG'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350],
      ],
    };
  },
};
</script>

<style scoped>

</style>
