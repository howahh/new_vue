<template>
  <div id="mymap"></div>
</template>

<script>
import "echarts-gl";
import mapURL from "../assets/img/earth2.jpg";
import backURL from "../assets/img/light.png";
export default {
  mounted() {
    this.getData().then(() => {
      this.initChart();
    });
  },
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
    };
  },
  methods: {
    async getData() {
      var _this = this;
      await this.axios
        .post("http://localhost:5000/vpw/getLocAndStatus")
        .then((response) => {
          console.log(response.data.data);
          for (var key in response.data.data[0]) {
            _this.data1.push(response.data.data[0][key].loc);
            _this.data1[key].push(1.3);
          }
          console.log(_this.data1);
          for (var key in response.data.data[1]) {
            _this.data2.push(response.data.data[1][key].loc);
            _this.data2[key].push(1.3);
          }
          for (var key in response.data.data[2]) {
            _this.data3.push(response.data.data[2][key].loc);
            _this.data3[key].push(1.3);
          }
          for (var key in response.data.data[3]) {
            _this.data4.push(response.data.data[3][key].loc);
            _this.data4[key].push(1.4);
          }
        });
    },
    initChart() {
      var chart = this.$echarts.init(document.getElementById("mymap"));
      var option = {
        backgroundColor: "rgb(0,0,0,0)",
        title: {
          text:"全球侵权情况态势感知"
        },
        globe: {
          // baseTexture:'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/earth.jpg',
          baseTexture: mapURL,
          environment: "none",
          globeRadius: 100,
          globeOuterRadius: 120,
          shading: "color",
          // environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          atmosphere: {
            show: true,
          },
          viewControl: {
            autoRotate: true,
            autoRotateSpeed: 10,
            autoRotateAfterStill: 3,
            animation: true,
            animationDurationUpdate: 10000,
          },
          visualMap:{

          }
        },
        series: [
          {
            type: "bar3D",
            coordinateSystem: "globe",
            name: "低",
            stack: "1",
            barSize: 1.5,
            bevelSmoothness: 0,
            minHeight: 0.1,
            silent: true,
            itemStyle: {
              color: "green",
            },
            data: this.data1,
          },
        ],
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
