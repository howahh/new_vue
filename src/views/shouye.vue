<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="10">
        <a-row>
          <a-card class="second-line mb-24">
            <!-- <div class="card-title">
            <h6>爬取网页数量</h6>
            <p>本月新增 <span class="text-success">+23%</span></p>
          </div> -->
            <template #title style="padding: 5px">
              <h6>爬取网页数量</h6>
              <p style="margin-bottom: 0px">
                本月新增<span class="text-success">+20%</span>
              </p>
            </template>
            <!-- <template #extra>
            <a-badge color="primary" class="badge-dot-primary" text="1" />
            <a-badge color="primary" class="badge-dot-secondary" text="2" />
          </template> -->
            <CardBarChart></CardBarChart>
          </a-card>
        </a-row>
        <a-row>
          <a-card class="second-line mb-24">
            <CardLineChart></CardLineChart>
          </a-card>
        </a-row>
      </a-col>
      <a-col :span="14">
        <!-- <a-card class="map mb-24"> -->
        <!-- <WidgetGlobe></WidgetGlobe> -->
        <Mymap></Mymap>
        <!-- </a-card> -->
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-card class="first-line mb-24">
          <a-row :gutter="24">
            <a-col :span="4">
              <a-progress
                type="circle"
                :strokeWidth="ciycle_width"
                :stroke-color="{
                  '0%': '#1890FF',
                  '100%': '#B37FEB',
                }"
                :percent="90"
                status="active"
                :width="100"
                style="margin-top: 10px; margin-left: 30px"
              >
                <template #format="percent">
                  <span style="color: #1890ff">爬虫任务1</span><br />
                  <span style="color: #b37feb">{{ percent }}%</span>
                </template></a-progress
              >
            </a-col>
            <a-col :span="4">
              <a-progress
                type="circle"
                :strokeWidth="ciycle_width"
                :stroke-color="{
                  '0%': '#1890FF',
                  '100%': '#B37FEB',
                }"
                :percent="89"
                status="active"
                :width="100"
                style="margin-top: 10px; margin-left: 40px"
              >
                <template #format="percent">
                  <span style="color: #1890ff">爬虫任务1</span><br />
                  <span style="color: #b37feb">{{ percent }}%</span>
                </template></a-progress
              >
            </a-col>
            <a-col :span="4">
              <a-progress
                type="circle"
                :strokeWidth="ciycle_width"
                :stroke-color="{
                  '0%': '#1890FF',
                  '100%': '#B37FEB',
                }"
                :percent="22"
                status="active"
                :width="100"
                style="margin-top: 10px; margin-left: 40px"
              >
                <template #format="percent">
                  <span style="color: #1890ff">爬虫任务1</span><br />
                  <span style="color: #b37feb">{{ percent }}%</span>
                </template></a-progress
              >
            </a-col>
            <a-col :span="4">
              <a-progress
                type="circle"
                :strokeWidth="ciycle_width"
                :stroke-color="{
                  '0%': '#1890FF',
                  '100%': '#B37FEB',
                }"
                :percent="58"
                status="active"
                :width="100"
                style="margin-top: 10px; margin-left: 40px"
              >
                <template #format="percent">
                  <span style="color: #1890ff">爬虫任务1</span><br />
                  <span style="color: #b37feb">{{ percent }}%</span>
                </template></a-progress
              >
            </a-col>
            <a-col :span="4">
              <a-progress
                type="circle"
                :strokeWidth="ciycle_width"
                :stroke-color="{
                  '0%': '#1890FF',
                  '100%': '#B37FEB',
                }"
                :percent="72"
                status="active"
                :width="100"
                style="margin-top: 10px; margin-left: 40px"
              >
                <template #format="percent">
                  <span style="color: #1890ff">爬虫任务1</span><br />
                  <span style="color: #b37feb">{{ percent }}%</span>
                </template></a-progress
              >
            </a-col>
            <a-col :span="4">
              <a-progress
                type="circle"
                :strokeWidth="ciycle_width"
                :stroke-color="{
                  '0%': '#1890FF',
                  '100%': '#B37FEB',
                }"
                :percent="100"
                status="active"
                :width="100"
                style="margin-top: 10px; margin-left: 40px"
              >
                <template #format="percent">
                  <span style="color: #1890ff">爬虫任务1</span><br />
                  <span style="color: #b37feb">{{ percent }}%</span>
                </template></a-progress
              >
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="14">
        <a-card
          :bordered="false"
          class="header-solid third-line dashboard-bar-line"
          :bodyStyle="{ padding: '0 12px 8px 3px' }"
        >
          <template #title>
            <h6>任务运行情况</h6>
            <p>本月新增<span class="text-success">+32%</span></p>
            <p>本月新增<span class="text-danger">-3%</span></p>
          </template>
          <template #extra>
            <a-badge
              color="primary"
              class="badge-dot-primary"
              text="获取任务"
            />
            <a-badge
              color="primary"
              class="badge-dot-secondary"
              text="分析任务"
            />
          </template>
          <BarsForDash></BarsForDash>
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-card class="third-line"> 123 </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CardBarChart from "../components/Cards/CardBarChart";
import Lines from "../components/MyCharts/Lines";
import CardLineChart from "../components/Cards/CardLineChart.vue";
import WidgetGlobe from "../components/Widgets/WidgetGlobe";
import Mymap from "../components/Mymap";
import BarsForDash from "../components/BarsForDash";

export default {
  components: {
    Lines,
    CardBarChart,
    CardLineChart,
    WidgetGlobe,
    Mymap,
    BarsForDash,
  },

  data() {
    return {
      ciycle_width: 8,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
/* .smchart {
  height: 230px;
  margin-bottom: 12px;
  box-shadow: 3;
  background-image: blue;
} */
.first-line {
  height: 120px;
}
.second-line {
  height: 278px;
}
.third-line {
  height: 300px;
}
.card-title {
  /* margin-top: 12px; */
  margin-left: 12px;
}
.map::v-deep {
  height: 580px;
}
</style>
