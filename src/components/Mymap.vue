<template>
  <div id="mymap"></div>
</template>

<script>
import "echarts-gl";
import mapURL from "../assets/img/earth2.jpg";

export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = this.$echarts.init(document.getElementById("mymap"));
      var option = {
        backgroundColor: 'rgb(0,0,0,0)',
        globe: {
          // baseTexture:'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/earth.jpg',
          baseTexture:mapURL,
          environment:'none',

          shading: "color",
          // environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          atmosphere: {
            show: true,
          },
          viewControl:{
            autoRotate:true,
            autoRotateSpeed : 20,
            autoRotateAfterStill : 1,
            animation:true,
            animationDurationUpdate : 10000,
          }
         
        },
        series: [

        ],
      };
      chart.setOption(option)
    },
  },
};
</script>

<style scoped>
#mymap{
  margin-top:0px;
  min-height: 580px;
  margin-left:20px
}
</style>
