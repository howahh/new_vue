<template>
  <div id="mymap"></div>
</template>

<script>
import "echarts-gl";
import mapURL from "../assets/img/earth2.jpg";
import backURL from "../assets/img/light.png";
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = this.$echarts.init(document.getElementById("mymap"));
      var option = {
        backgroundColor: "rgb(0,0,0,0)",
        globe: {
          // baseTexture:'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/earth.jpg',
          baseTexture: mapURL,
          environment: "none",
          globeRadius: 100,
          globeOuterRadius: 120,
          // postEffect: {
          //   enable: true,
          //   bloom: {
          //     enable: true,
          //   },
          // },
          shading: "color",
          // environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          atmosphere: {
            show: true,
          },
          viewControl: {
            autoRotate: true,
            autoRotateSpeed: 10,
            autoRotateAfterStill: 1,
            animation: true,
            animationDurationUpdate: 10000,
          },
        },
        series: {
          type: "bar3D",
          coordinateSystem: "globe",
          barSize: 1.5,
          bevelSmoothness : 2,
          minHeight: 0.2,
          silent: true,
          itemStyle: {
            color: "orange",
          },
          data: [
            [-43, 76.5, 2.2],
            [-85.5, 73.5, 1.70293863659264],
            [32,50,3.1]
          ],
        },
      };
      chart.setOption(option);
    },
  },
};
</script>

<style scoped>
#mymap {
  margin-top: 0px;
  min-height: 580px;
  margin-left: 20px;
}
</style>
