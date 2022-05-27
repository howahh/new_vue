<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="10">
        <a-row>
          <a-card
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
          >
            <template #title style="padding: 5px">
              <h6>电影被侵权次数</h6>
              <p style="margin-bottom: 0px">
                本月新增<span class="text-success">+12%</span>
              </p>
            </template>
            <!-- <template #extra>
            <a-badge color="primary" class="badge-dot-primary" text="1" />
            <a-badge color="primary" class="badge-dot-secondary" text="2" />
          </template> -->
            <CardBarChart></CardBarChart>
          </a-card>
        </a-row>
        <a-row class="mb-24">
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
             <dv-decoration-9
                style="width: 150px; height: 150px; margin-top:5px;margin-left: 10px"
                :color="['rgb(179,127,235)','rgb(24,144,255)']"
                dur="7"
              >
                  <div style="color: #1890ff">爬虫1:</div>
                  <br>
                  <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="width: 150px; height: 150px; margin-top:5px;margin-left: 10px"
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="7"
              >
                  <div style="color: #1890ff">爬虫1:</div>
                  <br>
                  <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="width: 150px; height: 150px; margin-top:5px;margin-left: 10px"
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="5"
              >
                  <div style="color: #1890ff">爬虫1:</div>
                  <br>
                  <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="width: 150px; height: 150px; margin-top:5px;margin-left: 10px"
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="6"
              >
                  <div style="color: #1890ff">爬虫1:</div>
                  <br>
                  <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="width: 150px; height: 150px; margin-top:5px;margin-left: 10px"
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="2"
              >
                  <div style="color: #1890ff">爬虫1:</div>
                  <br>
                  <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="width: 150px; height: 150px; margin-top:5px;margin-left: 10px"
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="3"
              >
                  <div style="color: #1890ff">爬虫1:</div>
                  <br>
                  <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="13">
        <a-card
          :bordered="false"
          class="header-solid third-line dashboard-bar-line"
          :bodyStyle="{ padding: '0 12px 8px 3px' }"
        >
          <template #title>
            <h6>任务运行情况</h6>
            <p>本月新增<span style="color: rgb(0, 130, 251)">-33%</span></p>
            <p>本月新增<span style="color: rgb(179, 127, 235)">-57%</span></p>
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
      <a-col :span="11">
        <a-card class="third-line">
          <IndexRoll></IndexRoll>
        </a-card>
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
import IndexRoll from "../components/IndexRoll";

export default {
  components: {
    Lines,
    CardBarChart,
    CardLineChart,
    WidgetGlobe,
    Mymap,
    BarsForDash,
    IndexRoll,
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
.first-line {
  height: 160px;
}
.second-line {
  height: 278px;
}
.third-line {
  height: 320px;
}
.card-title {
  /* margin-top: 12px; */
  margin-left: 12px;
}
.map::v-deep {
  height: 580px;
}
</style>
