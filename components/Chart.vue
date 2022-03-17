<template>
  <div>
    <VueApexCharts
      ref="chart"
      height="350"
      type="line"
      :options="options"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script>
export default {
  props: ['series', 'options'],
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  }
};
</script>
