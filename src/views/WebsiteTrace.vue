<template>
  <div>
    <a-row class="mb-24">
      <a-col :span="24">
        <a-card
          class="card-table dashboard-bar-line header-solid"
          style="height: 70px; padding: 16px"
        >
          <div style="display: inline-block">
            <a-button type="primary" style="font-size: 13px">
              <a-icon type="cloud-download" style="font-size: 13px" />
              导出本页信息</a-button
            >
          </div>
          <div style="float: right; margin-top: 8px">
            <div
              style="
                font-weight: bold;
                font-size: 15px;
                display: inline-block;
                margin-right: 4px;
              "
            >
              显示所有信息
            </div>
            <a-switch default-checked />
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="16">
        <a-card
          class="mb-24 card-table dashboard-bar-line header-solid"
          style="height: 500px"
        ></a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          class="mb-24 card-table dashboard-bar-line header-solid"
          style="height: 500px"
        ></a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card
          class="mb-24 card-table dashboard-bar-line header-solid"
          style="height: 400px"
          v-if="this.chartLeftFlag"
        >
          <template #title>
            <h6>该类别中侵权网站增长情况图</h6>
            <p>过去十周增长情况</p>
            <!-- <p>已发现网站数量 <span class="text-success">+0.8%</span></p> -->
          </template>
          <template #extra>
            <a-badge
              color="primary"
              class="badge-dot-primary"
              text="当周增长数量"
            />
            <a-badge
              color="primary"
              class="badge-dot-secondary"
              text="该类别中总数量"
            />
          </template>
          <ChartLeft :data1="this.data1" :data_all="this.data_all"></ChartLeft>
        </a-card>
        <a-card
          class="mb-24 card-table dashboard-bar-line header-solid"
          style="height: 400px; text-align: center"
          v-if="this.chartLeftFlag == 0"
        >
          <div style="height: 180px"></div>
          <a-spin></a-spin>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card
          class="mb-24 card-table dashboard-bar-line header-solid"
          style="height: 400px"
        >
          <template #title>
            <h6>各类别网站活跃时间与规模气泡图</h6>
            <p>大气泡说明含有侵权电影资源越多</p>
            <!-- <p>已发现网站数量 <span class="text-success">+0.8%</span></p> -->
          </template>
          <ChartRight></ChartRight>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ChartLeft from "../components/TraceChartLeft.vue";
import ChartRight from "../components/TraceChartRight.vue";
export default {
  components: { ChartLeft, ChartRight },
  data() {
    return {
      data1: [],
      data_all: [],
      chartLeftFlag: false,
    };
  },

  mounted() {
    // setInterval(() => {
    var random = Math.floor(Math.random() * 100 + 10);
    //   this.onChangeLabel(random);
    // }, 2000);
    this.onChangeLabel(random);
  },

  methods: {
    onChangeLabel(max) {
      //   Math.floor(Math.random() * 10 + 1)
      this.chartLeftFlag = false;
      setTimeout(() => {
        this.chartLeftFlag = true;
      }, 1000);
      this.data1 = [];
      this.data_all = [];
      var temp = 0;
      var change = 0;
      for (var i = 0; i < 10; i++) {
        temp = (max * 0.7) / 10;
        if (i % 2 == 0) {
          change = Math.floor(Math.random() * (temp * 0.8) + temp * 0.1);
          temp -= change;
        } else {
          temp += change;
        }
        this.data1.push(temp);
        if (i == 0) {
          this.data_all.push(temp + max * 0.3);
        } else {
          this.data_all.push(this.data_all[this.data_all.length - 1] + temp);
        }
      }
      //   console.log("data1:", this.data1);
      //   console.log("data_all:", this.data_all);
    },
  },
};
</script>

<style>
</style>