<template>
  <div class="line-holder" id="myid"></div>
</template>

<script>

export default {
    
    mounted() {
        this.initChart();
    },
    data () {
        return {
        chartdata:[],
        }
    },
    methods: {
        initChart (){
            let chart = this.$echarts.init(document.getElementById("myid"));
            console.log("hhh")
            this.getdata();
      chart.setOption({
        //标题配置
        title: {
          text: "▎网页新增数量",
          left: 10,
          top: 10,
          textStyle: {
            color: "#fff",
          },
        },
        //展示图的展示位置
        grid: {
          top: "20%",
          left: "3%",
          right: "6%",
          bottom: "3%",
          containLabel: true, // 距离是包含坐标轴上的文字
        },
        //图例的展示，通过name与series里对应
        legend: {
          name: "数量",
          show: true,
          right: 10,
          top: 10,
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["五月", "四月", "三月", "二月", "一月", "十二月"],
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        //鼠标在图上时的具体信息展示
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            z: 0,
            lineStyle: {
              color: "#2D3443",
            },
          },
        },
        series: [
          {
            name: "数量",
            type: "bar",
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: "white",
              },
            },
            data:[1,2,3,4,5,6],
            itemStyle: {
              // 指明颜色渐变的方向
              // 指明不同百分比之下颜色的值
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                // 百分之0状态之下的颜色值
                {
                  offset: 0,
                  color: "#5052EE",
                },
                // 百分之100状态之下的颜色值
                {
                  offset: 1,
                  color: "#AB6EE5",
                },
              ]),
            },
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        chart.resize();
      };
        },
        async getdata(){
              await this.axios
                .post("http://localhost:5000/vpw/getCrawledCount",{
          interval:'day',
          dateStart:'2022-1-22',
          dateEnd:'2022-01-27',
        })
        .then((response) => {
          // console.log(response)
          this.chartdata = response.data.data.map((item) =>{
            return item.count*32
          })
        })
        .catch(function (error) {
          console.log(error);
        });

        }
    }
}
</script>

<style scoped lang="css">
.line-holder {
  height: 224px;
  border-radius: 5px;
  /* background-color: #0d265e; */
  margin: 6px;
  width: 100%;
  border: 1px solid;
  border-color: white;
}
</style>
